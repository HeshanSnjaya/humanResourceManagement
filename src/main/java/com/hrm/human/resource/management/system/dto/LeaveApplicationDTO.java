package com.hrm.human.resource.management.system.dto;

import com.hrm.human.resource.management.system.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LeaveApplicationDTO {
    private Long employeeId;
    private String leaveTypeName;
    private Integer noOfDays;
    private Date startDate;
    private Date endDate;
    private String reason;
}
