package com.hrm.human.resource.management.system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkExperienceDTO {
    private Long experienceId;
    private String companyName;
    private String designation;
    private Date startDate;
    private Date endDate;
    private Long employeeId;
}
