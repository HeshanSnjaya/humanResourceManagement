package com.hrm.human.resource.management.system.service;

import com.hrm.human.resource.management.system.dto.UserBonusAddRequestDTO;
import com.hrm.human.resource.management.system.entity.Bonus;
import com.hrm.human.resource.management.system.entity.ResponseMessage;
import com.hrm.human.resource.management.system.entity.User;
import com.hrm.human.resource.management.system.entity.UserBonus;
import com.hrm.human.resource.management.system.repository.BonusRepository;
import com.hrm.human.resource.management.system.repository.UserBonusRepository;
import com.hrm.human.resource.management.system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserBonusService {
    private final UserBonusRepository userBonusRepository;
    private final BonusRepository bonusRepository;
    private final UserRepository userRepository;

    @Transactional
    public ResponseMessage addUserBonus(UserBonusAddRequestDTO userBonusRequestDTO) {
        try {
            Bonus bonus = bonusRepository.findById(userBonusRequestDTO.getBonusId())
                    .orElseThrow(() -> new RuntimeException("Bonus not found"));

            if (userBonusRequestDTO.getBonusAmount() > bonus.getBonusAmount()) {
                throw new RuntimeException("Bonus amount exceeds allowed limit");
            }

            User user = userRepository.findById(userBonusRequestDTO.getEmployeeId())
                    .orElseThrow(() -> new RuntimeException("Employee not found"));

            UserBonus userBonus = UserBonus.builder()
                    .bonus(bonus)
                    .employee(user)
                    .month(userBonusRequestDTO.getMonth())
                    .build();

            userBonusRepository.save(userBonus);

            return ResponseMessage.builder()
                    .message("User bonus added successfully")
                    .build();
        } catch (Exception e) {
            return ResponseMessage.builder()
                    .message("Failed to add user bonus: " + e.getMessage())
                    .build();
        }
    }
}
