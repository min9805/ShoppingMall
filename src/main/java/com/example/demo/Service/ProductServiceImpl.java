package com.example.demo.Service;

import com.example.demo.Product;
import com.example.demo.entity.ProductEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService{
    @Override
    public String[] registProduct(Product product, MultipartFile imgFile) throws IOException {

        String oriImgName = imgFile.getOriginalFilename();
        String imgName = "";

        String projectPath = System.getProperty("user.dir") + "/src/main/resources/img/";

        // UUID 를 이용하여 파일명 새로 생성
        // UUID - 서로 다른 객체들을 구별하기 위한 클래스
        UUID uuid = UUID.randomUUID();

        String savedFileName = uuid + "_" + oriImgName; // 파일명 -> imgName

        imgName = savedFileName;

        File saveFile = new File(projectPath, imgName);

        imgFile.transferTo(saveFile);

        ProductEntity.builder()
                .imgName(imgName)
                .imgPath(projectPath)
                .build();

        return new String[]{imgName, projectPath};
    }
}
