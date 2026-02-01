🧩 🧠 DESAFIO: Sistema de Controle de Produtos

Você deve criar DOIS PROCESSOS:

/Process/RelatorioProdutos.ip
/Process/CadastroProdutos.ip

🎯 OBJETIVO GERAL

Criar um mini sistema onde o usuário possa:

✔ Cadastrar produtos
✔ Editar produtos
✔ Excluir produtos
✔ Consultar produtos com filtro
✔ Aplicar regras de validação

🧾 1️⃣ CADASTRO DE PRODUTOS
📌 Campos da Classe (DataSet)
Campo	Tipo
iKey	PK
iName	Nome do produto
preco	Número
estoque	Número
ativo	Boolean
✅ Tela deve ter

Grid com os produtos

Botão Novo

Botão Editar

Botão Excluir

FormDialog para inserção/edição

🧠 REGRAS DE NEGÓCIO (OBRIGATÓRIAS)

Implemente usando eventos:

Regra	Onde fazer
Nome obrigatório	beforePost
Preço não pode ser negativo	beforePost
Estoque não pode ser negativo	beforePost
Produto com estoque = 0 → mostrar alerta	afterPost
💡 DICA

Use:

grid.on("beforePost", function(e){
  const ds = e.grid.ds;
});

📊 2️⃣ RELATÓRIO DE PRODUTOS
📌 Tela deve ter

Campo filtro por nome

Botão Pesquisar

Grid somente leitura

Filtro aplicado no DataSet

🎯 FUNCIONALIDADE EXTRA (BÔNUS)

Adicionar uma coluna calculada na grid:

"Valor em Estoque" = preco × estoque

📌 O QUE SERÁ AVALIADO
Item	Peso
Uso correto de Grid	⭐⭐⭐
Uso de FormDialog	⭐⭐⭐
Uso de DataSet	⭐⭐⭐
Validações via eventos	⭐⭐⭐⭐
Separação Relatório vs Cadastro	⭐⭐⭐
🧠 O QUE UM DEV JÚNIOR BOM FAZ AQUI

✔ Não coloca regra direto no botão
✔ Usa eventos (beforePost)
✔ Entende diferença entre interação e atividade
✔ Usa filtro corretamente
✔ Trata erro com alert()

🏁 RESULTADO ESPERADO

Sistema onde:

Usuário abre Cadastro → insere produto

Sistema valida

Produto aparece no relatório

Filtro funciona