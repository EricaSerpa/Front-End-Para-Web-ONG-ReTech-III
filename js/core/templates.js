const Templates = (() => {
  const app = document.getElementById('app');

  const views = {
    // Página inicial (conteúdo original do index.html)
    '/': () => `
      <section>
        <article>
          <h2>Quem Somos</h2>
          <p>
            A ReTech é uma organização sem fins lucrativos que acredita no poder da tecnologia como ferramenta de
            transformação social e ambiental. Atuamos no reaproveitamento de equipamentos eletrônicos descartados,
            promovendo o descarte consciente e o recondicionamento de dispositivos que ganham nova vida em
            laboratórios de informática instalados em comunidades de baixa renda. Mais do que reciclar,
            conectamos pessoas e oportunidades. Transformamos resíduos em recursos, exclusão em inclusão, e
            descarte em esperança.
          </p>
          <img src="imagens/Recovery.jpg" alt="Equipamentos sendo recuperados">
        </article>
      </section>

      <section>
        <article>
          <h2>Missão</h2>
          <p>
            Transformar resíduos eletrônicos em oportunidades de aprendizado, inclusão e desenvolvimento,
            recondicionando equipamentos e instalando laboratórios de informática em comunidades de baixa renda.
          </p>
        </article>
      </section>

      <section>
        <article>
          <h2>Visão</h2>
          <p>
            Ser referência na promoção da inclusão digital e sustentabilidade ambiental, conectando comunidades
            por meio da tecnologia reciclada.
          </p>
        </article>
      </section>

      <section>
        <article>
          <h2>Valores</h2>
          <ul>
            <li><strong>Sustentabilidade</strong>: Compromisso com o meio ambiente por meio do reaproveitamento consciente de tecnologia.</li>
            <li><strong>Inclusão</strong>: Democratização do acesso à informação e à educação digital.</li>
            <li><strong>Inovação Social</strong>: Uso criativo da tecnologia para gerar impacto positivo nas comunidades.</li>
            <li><strong>Transparência</strong>: Atuação ética e responsável em todas as etapas do processo.</li>
            <li><strong>Colaboração</strong>: Construção de redes solidárias entre empresas, voluntários e comunidades.</li>
            <li><strong>Educação</strong>: Fomento ao conhecimento como ferramenta de transformação.</li>
          </ul>
        </article>
      </section>

      <section>
        <article>
          <h2>Junte-se a Nós</h2>
          <p>
            Seja voluntário, parceiro ou doador. Com a sua ajuda, podemos ampliar nosso impacto e levar mais
            tecnologia reciclada para um futuro conectado.
          </p>
        </article>
      </section>
    `,

    // Página de projetos (conteúdo original de projeto.html)
    '/projetos': () => `
      <section>
        <article>
          <h2>O Que Fazemos</h2>
          <ul>
            <li>Coletamos equipamentos eletrônicos descartados por empresas e pessoas físicas.</li>
            <li>Recondicionamos computadores, notebooks e periféricos em nossos centros técnicos.</li>
            <li>Instalamos laboratórios de informática em comunidades de baixa renda.</li>
            <li>Oferecemos capacitação digital e suporte técnico local.</li>
            <li>Promovemos campanhas de conscientização sobre descarte responsável.</li>
          </ul>
          <img src="imagens/Campanhas.jpg" alt="Centros técnicos">
        </article>

        <article>
          <h2>Descarte Eletrônico Correto</h2>
          <p>
            O descarte inadequado de eletrônicos representa um risco ambiental e à saúde pública.
            A ReTech atua como ponte entre quem deseja descartar e quem precisa se conectar:
          </p>
          <ul>
            <li>Recebemos equipamentos obsoletos ou fora de uso de empresas e pessoas físicas.</li>
            <li>Garantimos que o descarte seja feito de forma segura, responsável e com rastreabilidade.</li>
            <li>Reaproveitamos componentes e recondicionamos dispositivos para uso educacional.</li>
            <li>O que não pode ser reaproveitado é encaminhado para reciclagem certificada.</li>
            <li>Descarte com propósito. Descarte com impacto.</li>
          </ul>
          <img src="imagens/Descarte.jpg" alt="Descarte">
        </article>

        <article>
          <h2>Junte-se a Nós</h2>
          <p>
            Seja voluntário, parceiro ou doador. Com a sua ajuda, podemos ampliar nosso impacto
            e levar mais tecnologia reciclada para um futuro conectado.
          </p>
        </article>
      </section>
    `,

    // Página de cadastro (conteúdo original de cadastro.html)
    '/cadastro': () => `
<section>
  <article>
    <h1>♻️ Doações de Lixo Eletrônico</h1>
    <p>
      A ONG ReTech acredita que pequenas atitudes geram grandes transformações. Por isso, convidamos você a
      fazer parte dessa corrente do bem!<br>
      Tem algum eletrônico parado em casa? Celulares, computadores, tablets, impressoras, cabos, peças…<br>
      Se estiverem quebrados, obsoletos ou simplesmente sem uso, você pode dar a eles um destino consciente e
      ainda ajudar a promover inclusão digital.<br>
      Ao doar seu lixo eletrônico, você contribui diretamente para a capacitação de jovens em situação de
      vulnerabilidade, além de colaborar com o meio ambiente por meio do descarte responsável.<br>
      Preencha o formulário abaixo.<br>
      Cada equipamento recebido é uma oportunidade de aprendizado, transformação e esperança.<br>
      Em nome de todos os jovens beneficiados pelo projeto, agradecemos profundamente sua colaboração.<br>
    </p>
  </article>

  <aside>
    <p><strong>Nota:</strong> Os dados fornecidos são protegidos e usados apenas para fins de contato e
    logística da doação.</p>
  </aside>

  <section>
    <h2>Dados do Doador</h2>
    <form id="form-cadastro" novalidate>
      <fieldset>
        <legend>Dados do Doador</legend>
        <label>Nome completo:
          <input type="text" name="nome" required minlength="3">
          <small class="error" data-error-for="nome"></small>
        </label>
        <label>Email:
          <input type="email" name="email" required>
          <small class="error" data-error-for="email"></small>
        </label>
        <label>Telefone:
          <input type="tel" name="telefone" placeholder="(XX) 91234-5678" required>
          <small class="error" data-error-for="telefone"></small>
        </label>
        <label>CEP:
          <input type="text" name="cep" placeholder="00000-000" required>
          <small class="error" data-error-for="cep"></small>
        </label>
        <label>Rua:
          <input type="text" name="rua" required>
          <small class="error" data-error-for="rua"></small>
        </label>
        <label>Bairro:
          <input type="text" name="bairro" required>
          <small class="error" data-error-for="bairro"></small>
        </label>
        <label>Cidade:
          <input type="text" name="cidade" required>
          <small class="error" data-error-for="cidade"></small>
        </label>
        <label>Estado:
          <input type="text" name="estado" required>
          <small class="error" data-error-for="estado"></small>
        </label>
      </fieldset>

      <fieldset>
        <legend>Informações da Doação</legend>
        <label>Tipo de equipamento:
          <select name="tipo" required>
            <option value="">Selecione</option>
            <option value="computador">Computador</option>
            <option value="notebook">Notebook</option>
            <option value="celular">Celular</option>
            <option value="tablet">Tablet</option>
            <option value="outros">Outros</option>
          </select>
          <small class="error" data-error-for="tipo"></small>
        </label>
        <label>Quantidade:
          <input type="number" name="quantidade" min="1" required>
          <small class="error" data-error-for="quantidade"></small>
        </label>

        <label>Estado do equipamento:</label>
        <label class="radio-label">
          Funcionando
          <input type="radio" name="estado" value="funcionando" required>
        </label>
        <label class="radio-label">
          Precisa de reparo
          <input type="radio" name="estado" value="precisa-reparo">
        </label>
        <label class="radio-label">
          Sem condições de uso
          <input type="radio" name="estado" value="sem-condicoes">
        </label>

        <label>Observações:
          <textarea name="observacoes" rows="4"
            placeholder="Ex: marca, modelo, acessórios inclusos..."></textarea>
            <small class="error" data-error-for="observacoes"></small>
        </label>
      </fieldset>

      <button type="submit">Cadastrar Doação</button>
    </form>
  </section>
</section>
`,

    // Página de contato (conteúdo original de contato.html)
    '/contato': () => `
<section id="hero">
  <article>
    <h1>Fale Conosco</h1>
    <p>
      Se você chegou até aqui, é porque acredita no poder da transformação e nós também!<br>
      Este espaço é dedicado a você, que deseja contribuir com ideias, sugestões, dúvidas ou palavras de apoio.<br>
      Seja você um doador, voluntário ou alguém que quer conhecer melhor nosso trabalho, sua voz é essencial para construirmos juntos um futuro mais justo e sustentável.<br>
      Preencha o formulário abaixo e compartilhe conosco sua mensagem.<br>
      Toda interação fortalece nossa rede de impacto social.<br>
      Convidamos você a se conectar conosco nas redes sociais.<br>
      Acreditamos na importância da interação e compartilhamento de informações com nossa comunidade.<br>
      Obrigado por se juntar a nós nesta jornada de descoberta e inovação!<br>
    </p>
  </article>
</section>

<section id="contact">
  <h2>Informações de Contato</h2>
  <dl>
    <dt>📍 Endereço:</dt>
    <dd>Rua da Solidariedade, 44 - Centro, São Paulo - SP, Brasil</dd>

    <dt>📞 Telefone:</dt>
    <dd><a href="tel:+5511987651234">+55 (11) 98765-1234</a></dd>
    <dd><a href="tel:+551154481234">+55 (11) 5448-1234</a></dd>

    <dt>✉️ Email:</dt>
    <dd><a href="mailto:contato@retech.org.br">contato@retech.org.br</a></dd>

    <dt>🌐 Site:</dt>
    <dd><a href="https://www.retech.org.br" target="_blank">www.retech.org.br</a></dd>

    <dt>📱 Redes Sociais:</dt>
    <dd><a href="https://www.instagram.com/retechbrasil" target="_blank">@retechbrasil</a></dd>
  </dl>
</section>

<section id="form-contato">
  <form id="form-contato" novalidate>
    <fieldset>
      <legend>Voluntariado, Dúvidas, Sugestões ou Comentários</legend>

      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required minlength="3">
      <small class="error" data-error-for="nome"></small>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <small class="error" data-error-for="email"></small>

      <label for="tipo">Tipo de mensagem:</label>
      <select id="tipo" name="tipo" required>
        <option value="">Selecione</option>
        <option value="voluntario">Voluntário</option>
        <option value="duvida">Dúvida</option>
        <option value="sugestao">Sugestão</option>
        <option value="comentario">Comentário</option>
      </select>
      <small class="error" data-error-for="tipo"></small>

      <label for="mensagem">Mensagem:</label>
      <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem aqui..." required minlength="10"></textarea>
      <small class="error" data-error-for="mensagem"></small>

      <button type="submit">Enviar</button>
    </fieldset>
  </form>
</section>
`,

    // Página de erro
    '/404': () => `<section><h1>Página não encontrada</h1></section>`
  };

  function render(path, data) {
    app.innerHTML = views[path] ? views[path](data) : views['/404']();
  }

  return { render };
})();

window.Templates = Templates;