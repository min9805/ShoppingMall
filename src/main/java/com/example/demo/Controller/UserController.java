package com.example.demo.Controller;

import com.example.demo.User;
import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController // JSON 형태 결과값을 반환해줌 (@ResponseBody가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. (Autowired 역할)
@RequestMapping("/v1") // version1의 API
public class UserController {

    private final UserRepository userRepository;

    /**
     * 멤버 조회
     * @return
     */
    @GetMapping("member/all")
    public List<UserEntity> findAllMember() {
        return userRepository.findAll();
    }

    /**
     * 회원가입
     * @return
     */
    @PostMapping("member/signUp")
    public UserEntity signUp(@RequestBody User user) {
        final UserEntity member = UserEntity.builder()
                .account(user.getAccount())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .createdAt(LocalDateTime.now())
                .createdBy("admin")
                .updatedAt(LocalDateTime.now())
                .updatedBy("admin")
                .build();
        return userRepository.save(member);
    }
}
