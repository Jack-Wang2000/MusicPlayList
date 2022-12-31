package com.OnegJack.Music.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "songs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Song {
    @Id@NotEmpty
    private Long id;
    @Column@NotEmpty
    private String name;
    @Column@NotEmpty
    private String artist_id;
    @Column@NotEmpty
    @Length(min = 11,max = 11)
    private String usr_phone;
}
