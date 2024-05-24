package com.zaliczenieISI.zaliczenieISI.repositories;

import com.zaliczenieISI.zaliczenieISI.domain.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumRepository extends JpaRepository<Album,Long> {

}
