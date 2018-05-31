package ma.maman.jeanne.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Routes.
 */
@Entity
@Table(name = "routes")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "routes")
public class Routes implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "distance")
    private Integer distance;

    @OneToMany(mappedBy = "route")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Itineraire> itineraries = new HashSet<>();

    @OneToMany(mappedBy = "route")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Voyage> itineraries = new HashSet<>();

    @ManyToOne(optional = false)
    @NotNull
    private City origin;

    @ManyToOne(optional = false)
    @NotNull
    private City destination;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public Routes code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getDistance() {
        return distance;
    }

    public Routes distance(Integer distance) {
        this.distance = distance;
        return this;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

    public Set<Itineraire> getItineraries() {
        return itineraries;
    }

    public Routes itineraries(Set<Itineraire> itineraires) {
        this.itineraries = itineraires;
        return this;
    }

    public Routes addItinerary(Itineraire itineraire) {
        this.itineraries.add(itineraire);
        itineraire.setRoute(this);
        return this;
    }

    public Routes removeItinerary(Itineraire itineraire) {
        this.itineraries.remove(itineraire);
        itineraire.setRoute(null);
        return this;
    }

    public void setItineraries(Set<Itineraire> itineraires) {
        this.itineraries = itineraires;
    }

    public Set<Voyage> getItineraries() {
        return itineraries;
    }

    public Routes itineraries(Set<Voyage> voyages) {
        this.itineraries = voyages;
        return this;
    }

    public Routes addItinerary(Voyage voyage) {
        this.itineraries.add(voyage);
        voyage.setRoute(this);
        return this;
    }

    public Routes removeItinerary(Voyage voyage) {
        this.itineraries.remove(voyage);
        voyage.setRoute(null);
        return this;
    }

    public void setItineraries(Set<Voyage> voyages) {
        this.itineraries = voyages;
    }

    public City getOrigin() {
        return origin;
    }

    public Routes origin(City city) {
        this.origin = city;
        return this;
    }

    public void setOrigin(City city) {
        this.origin = city;
    }

    public City getDestination() {
        return destination;
    }

    public Routes destination(City city) {
        this.destination = city;
        return this;
    }

    public void setDestination(City city) {
        this.destination = city;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Routes routes = (Routes) o;
        if (routes.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), routes.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Routes{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", distance=" + getDistance() +
            "}";
    }
}
