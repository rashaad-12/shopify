package com.blume.orderservice.service.impl;

import com.blume.orderservice.dto.InventoryResponse;
import com.blume.orderservice.dto.OrderLineItemsDto;
import com.blume.orderservice.dto.OrderRequest;
import com.blume.orderservice.model.Order;
import com.blume.orderservice.model.OrderLineItem;
import com.blume.orderservice.repository.OrderRepository;
import com.blume.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final WebClient.Builder webClientBuilder;

    @Override
    public void placeOrder(OrderRequest orderRequest) {

        List<OrderLineItem> orderLineItems = orderRequest.getOrderLineItemsDtoList()
                .stream()
                .map(this::mapToDto)
                .toList();

        Order order = Order.builder()
                .orderNumber(UUID.randomUUID().toString())
                .orderLineItemList(orderLineItems)
                .build();

        List<String> skuCodes = order.getOrderLineItemList()
                .stream()
                .map(OrderLineItem::getSkuCode)
                .toList();

//        check inventory
        InventoryResponse[] inventoryResponses =  webClientBuilder.build().get()
                .uri("http://inventory-service/api/inventory",
                        uriBuilder -> uriBuilder.queryParam("skuCode", skuCodes).build())
                .retrieve()
                .bodyToMono(InventoryResponse[].class)
                .block();

        boolean allProductsInStock = Arrays.stream(inventoryResponses)
                .allMatch(InventoryResponse::isInStock);

        if (allProductsInStock) {
            orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("Product out of stock");
        }

    }

    private OrderLineItem mapToDto(OrderLineItemsDto orderLineItemsDto) {
        return OrderLineItem.builder()
                .skuCode(orderLineItemsDto.getSkuCode())
                .quantity(orderLineItemsDto.getQuantity())
                .price(orderLineItemsDto.getPrice())
                .build();
    }

}
