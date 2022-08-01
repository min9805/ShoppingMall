package com.example.demo.Controller;

import com.example.demo.Product;
import com.example.demo.Service.ProductService;
import com.example.demo.entity.ProductEntity;
import com.example.demo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@RestController // JSON 형태 결과값을 반환해줌 (@ResponseBody가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. (Autowired 역할)
@RequestMapping("/v1") // version1의 API
public class ProductController {
    @Autowired
    private ProductService productService;


    private final ProductRepository productRepository;
    /**
     * 상품 조회
     * @return
     */
    @GetMapping("product/all")
    public List<ProductEntity> findAllMember() {
        return productRepository.findAll();
    }

    /**
     * 상품 등록
     * @return
     */
    @PostMapping("product/register")
    public ProductEntity Register(@RequestPart(value="key") Product product,
                                  @RequestPart(value="file") MultipartFile file) throws Exception{
        String[] str = productService.registProduct(product, file);
        final ProductEntity prod = ProductEntity.builder()
                .prodName(product.getProdName())
                .imgName(str[0])
                .imgPath(str[1])
                .content(product.getContent())
                .price(product.getPrice())
                .createdAt(LocalDateTime.now())
                .createdBy("session user")
                .build();
        return productRepository.save(prod);
    }
}

