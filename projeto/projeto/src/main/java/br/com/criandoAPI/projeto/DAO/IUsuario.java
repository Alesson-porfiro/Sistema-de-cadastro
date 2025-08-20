package br.com.criandoAPI.projeto.DAO;

import org.springframework.data.repository.CrudRepository;
import br.com.criandoAPI.projeto.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer> {



}
