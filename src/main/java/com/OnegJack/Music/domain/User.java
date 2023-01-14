package com.OnegJack.Music.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Table(name="user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id@NotNull@Length(min = 11,max = 11)
    private String phone;
    @Column
    private String name;
    @Column
    private String picURL;
}
