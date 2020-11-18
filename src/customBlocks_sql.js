//creation de blocks personalisé

//creation des blocks
Blockly.Blocks['sql_select'] = {
  init: function() {
    this.appendValueInput("table")
        .setCheck(null)
        .appendField("SELECT");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_from'] = {
  init: function() {
    this.appendValueInput("FROM")
        .setCheck(null)
        .appendField("FROM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_where'] = {
  init: function() {
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

Blockly.Blocks['sql_table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("column"), "column");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





//fonction des blocks en JavaScript
Blockly.JavaScript['sql_select'] = function(block) {
  var value_select = Blockly.JavaScript.valueToCode(block, 'table', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'SELECT ';
  return code;
};

Blockly.JavaScript['sql_from'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' FROM ';
  return code;
};

Blockly.JavaScript['sql_where'] = function(block) {
  var value_where = Blockly.JavaScript.valueToCode(block, 'WHERE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' WHERE ';
  return code;
};

Blockly.JavaScript['sql_table'] = function(block) {
  var text_table = block.getFieldValue('table');
  var text_column = block.getFieldValue('column');
  // TODO: Assemble JavaScript into code variable.
  var code = text_table + '.' + text_column;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//fonction des blocks en PHP
Blockly.PHP['sql_select'] = function(block) {
  var value_select = Blockly.PHP.valueToCode(block, 'table', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = 'SELECT ';
  return code;
};

Blockly.PHP['sql_from'] = function(block) {
  var value_from = Blockly.PHP.valueToCode(block, 'FROM', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = ' FROM ';
  return code;
};

Blockly.PHP['sql_where'] = function(block) {
  var value_where = Blockly.PHP.valueToCode(block, 'WHERE', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = ' WHERE ';
  return code;
};

Blockly.PHP['sql_table'] = function(block) {
  var text_table = block.getFieldValue('table');
  var text_column = block.getFieldValue('column');
  // TODO: Assemble PHP into code variable.
  var code = text_table + '.' + text_column;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};