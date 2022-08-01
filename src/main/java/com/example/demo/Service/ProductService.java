package com.example.demo.Service;

import com.example.demo.Product;
import org.springframework.web.multipart.MultipartFile;

public interface ProductService {
    public String[] registProduct(Product product, MultipartFile imgFile) throws Exception;
}
