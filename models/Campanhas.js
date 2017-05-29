var db=require('../dbconnection'); //reference of dbconnection.js

var Campanhas={

getAllCampanhas:function(callback){


return db.query("SELECT * FROM campanhas_produtos" +
                " INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha" +
                " INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto" +
                " WHERE campanhas.data_inicio <= CURDATE()"+
                " AND campanhas.data_fim >= CURDATE()"+
                " AND campanhas.status =1 "+
                " AND campanhas_produtos.status =1 " ,callback);

},




 getCampanhaById:function(id,callback){

return db.query("select * from produtos where Id=?",[id],callback);
 },


 nomeCampanha:function(nome,callback){
   console.log('parametro',nome);
  return db.query("SELECT * FROM produtos WHERE produto like '%" + nome + "%' ",callback);
 },


};
 module.exports=Campanhas;
/*

$sql = "SELECT * FROM campanhas_produtos ";
$sql .= " INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha";
$sql .= " INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto";
$sql .= " WHERE campanhas.data_inicio <= CURDATE()";
$sql .= " AND campanhas.data_fim >= CURDATE()";
$sql .= " AND campanhas.status =1 ";
$sql .= " AND campanhas_produtos.status =1 ";

*/