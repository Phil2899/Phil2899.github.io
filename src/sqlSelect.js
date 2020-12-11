//creation des blocks

Blockly.Blocks['sql_select'] = {
  init: function() {
    this.appendValueInput("select")
        .setCheck(null)
        .appendField("SELECT");
   	
	this.appendValueInput("from")
	        .setCheck(null)
	        .appendField("FROM");

	this.appendValueInput("where")
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

  var value_select = Blockly.JavaScript.valueToCode(block, 'select', Blockly.JavaScript.ORDER_NONE);
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_NONE);
  var value_where = Blockly.JavaScript.valueToCode(block, 'where', Blockly.JavaScript.ORDER_NONE);


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