package com.hrm.human.resource.management.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "departmentHead")
public class DepartmentHead {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentHeadId;
    private String departmentHeadName;
}
