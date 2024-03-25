package com.blume.productservice.service.impl;

import com.blume.productservice.dto.ProductRequest;
import com.blume.productservice.dto.ProductResponse;
import com.blume.productservice.model.Product;
import com.blume.productservice.repository.ProductRepository;
import com.blume.productservice.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public void createProduct(ProductRequest productRequest) {
        Product product = Product.builder()
                .name(productRequest.getName())
                .brand(productRequest.getBrand())
                .description(productRequest.getDescription())
                .url(productRequest.getUrl())
                .price(productRequest.getPrice())
                .quantity(productRequest.getQuantity())
                .build();

        productRepository.save(product);
        log.info("Product {} is saved", product.getId());
    }

    @Override
    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();

        return products.stream().map(this::mapToProductResponse).toList();
    }

    private ProductResponse mapToProductResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .brand(product.getBrand())
                .description(product.getDescription())
                .url(product.getUrl())
                .price(product.getPrice())
                .quantity(product.getQuantity())
                .build();
    }
}
