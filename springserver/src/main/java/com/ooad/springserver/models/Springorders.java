package com.ooad.springserver.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("springorders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Springorders {

    private String cusname;
    private String med;
    private Integer quan;
    private String addr;
    @Id
    private String email;
    private Integer num;
    
}
