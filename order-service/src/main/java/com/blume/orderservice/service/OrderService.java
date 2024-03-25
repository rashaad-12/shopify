package com.blume.orderservice.service;

import com.blume.orderservice.dto.OrderRequest;

public interface OrderService {

    void placeOrder(OrderRequest orderRequest);
}
