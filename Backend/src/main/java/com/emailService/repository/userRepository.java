package com.emailService.repository;

import com.emailService.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository <user, Long> {
    Boolean existsByEmail(String email);
}
