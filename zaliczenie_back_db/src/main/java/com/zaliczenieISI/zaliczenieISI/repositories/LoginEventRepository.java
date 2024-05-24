package com.zaliczenieISI.zaliczenieISI.repositories;

import com.zaliczenieISI.zaliczenieISI.domain.LoginEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginEventRepository extends JpaRepository<LoginEvent,Long> {

}
