//creation des blocks

Blockly.Blocks['sql_select'] = {
  init: function() {
    this.appendValueInput("SELECT")
        .setCheck(null)
        .appendField("SELECT");
   	
	this.appendValueInput("FROM")
	        .setCheck(null)
	        .appendField("FROM");

	this.appendValueInput("WHERE")
        .setCheck(null)
        .appendField("WHERE");


    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sql_select'] = function(block) {

  var value_select = Blockly.JavaScript.valueToCode(block, 'SELECT', Blockly.JavaScript.ORDER_NONE);
  var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_NONE);
  var value_where = Blockly.JavaScript.valueToCode(block, 'WHERE', Blockly.JavaScript.ORDER_NONE);


  // TODO: Assemble JavaScript into code variable.
  var code = 'SELECT '+value_select;
  if (value_from != '') {
  	code += " FROM "+value_from;
  };
  if (value_where != '') {
  	code += " WHERE "+ value_where;
  };

  return code;
};