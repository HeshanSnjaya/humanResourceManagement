package com.hrm.human.resource.management.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private String password;
    private Integer age;
    private String employmentType;
    private Date joinedDate;
}
