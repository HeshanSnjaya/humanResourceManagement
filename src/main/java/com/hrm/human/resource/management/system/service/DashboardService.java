package com.hrm.human.resource.management.system.service;

import com.hrm.human.resource.management.system.dto.PieChartDTO;
import com.hrm.human.resource.management.system.entity.Department;
import com.hrm.human.resource.management.system.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final DepartmentRepository departmentRepository;

    public PieChartDTO getEmployeeCountByDepartment() {
        List<Department> departments = departmentRepository.findAll();

        List<String> departmentList = departments.stream()
                .map(Department::getDepartmentName)
                .collect(Collectors.toList());

        List<Integer> employeeCount = departments.stream()
                .map(department -> department.getUsers().size())
                .collect(Collectors.toList());

        return PieChartDTO.builder()
                .departmentList(departmentList)
                .employeeCount(employeeCount)
                .build();
    }
}
