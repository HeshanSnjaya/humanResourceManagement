package com.hrm.human.resource.management.system.dto;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private Long employeeId;
    private String firstName;
    private String lastName;
    private String motherName;
    private String spouseName;
    private String fatherName;
    private String maritalStatus;
    private String nic;
    private String mobilePhoneNo;
    private String homePhoneNo;
    private String gender;
    private String epfNo;
    private String address;
    private Date dob;
    private String workEmail;
    private Integer age;
    private String employmentType;
    private Date joinedDate;
}
