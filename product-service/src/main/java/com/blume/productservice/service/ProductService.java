package com.blume.productservice.service;

import com.blume.productservice.dto.ProductRequest;
import com.blume.productservice.dto.ProductResponse;

import java.util.List;

public interface ProductService {

    void createProduct (ProductRequest productRequest);

    List<ProductResponse> getAllProducts();
}
