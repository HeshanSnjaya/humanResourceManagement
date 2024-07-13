package com.hrm.human.resource.management.system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "educational_qualification")
public class EducationalQualification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qualificationId;
    private String courseName;
    private String qualificationDesc;
    private Integer year;
    private String instituteName;

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private User employee;
}
