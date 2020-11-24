//creation de blocks personalisé

//creation des blocks
Blockly.Blocks['sql_select'] = {
  init: function() {
    this.appendValueInput("SELECT")
        .setCheck(null)
        .appendField("SELECT");
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
        .appendField(new Blockly.FieldTextInput("table"), "table");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_column'] = {
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

Blockly.Blocks['sql_as'] = {
  init: function() {
    this.appendValueInput("AS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("AS")
        .appendField(new Blockly.FieldTextInput("alias"), "alias");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_add'] = {
  init: function() {
    this.appendValueInput("ADD")
        .setCheck(null)
        .appendField("ADD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(42);
 this.setTooltip("add an other table to the SELECT");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sql_and'] = {
  init: function() {
    this.appendValueInput("AND")
        .setCheck(null)
        .appendField("AND");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_or'] = {
  init: function() {
    this.appendValueInput("OR")
        .setCheck(null)
        .appendField("OR");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_condition'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("condition"), "condition");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_sum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SUM (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("sum the column elements");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_max'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MAX (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("determins the maximum value of the column");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_min'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MIN (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("determins the minimum value of the column");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("COUNT (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("calculate the number of column of the table");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_order_by'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ORDER BY")
        .appendField(new Blockly.FieldTextInput("column"), "column");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fonction des blocks en JavaScript
Blockly.JavaScript['sql_select'] = function(block) {
  var value_select = Blockly.JavaScript.valueToCode(block, 'SELECT', Blockly.JavaScript.ORDER_NONE) || '\'\'';
  // TODO: Assemble JavaScript into code variable.
  var code = 'SELECT ' + value_select;
  return code;
};

Blockly.JavaScript['sql_from'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = ' FROM ' + value_from;
  return code;
};

Blockly.JavaScript['sql_where'] = function(block) {
  var value_where = Blockly.JavaScript.valueToCode(block, 'WHERE', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = ' WHERE ' + value_where;
  return code;
};

Blockly.JavaScript['sql_table'] = function(block) {
  var text_table = block.getFieldValue('table');
  // TODO: Assemble JavaScript into code variable.
  var code = text_table;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_column'] = function(block) {
  var text_table = block.getFieldValue('table');
  var text_column = block.getFieldValue('column');
  // TODO: Assemble JavaScript into code variable.
  var code = text_table + '.' + text_column;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_as'] = function(block) {
  var value_as = Blockly.JavaScript.valueToCode(block, 'AS', Blockly.JavaScript.ORDER_NONE);
  var text_alias = block.getFieldValue('alias');
  // TODO: Assemble JavaScript into code variable.
  var code = value_as + ' AS ' + text_alias;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_add'] = function(block) {
  var value_add = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_NONE) || '\'\'';
  // TODO: Assemble JavaScript into code variable.
  var code = ' , ' + value_add;
  return code;
};

Blockly.JavaScript['sql_and'] = function(block) {
  var value_and = Blockly.JavaScript.valueToCode(block, 'AND', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = ' AND ' + value_and;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_or'] = function(block) {
  var value_or = Blockly.JavaScript.valueToCode(block, 'OR', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = ' OR '+value_or;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_condition'] = function(block) {
  var text_condition = block.getFieldValue('condition');
  var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = text_condition + value_condition;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_sum'] = function(block) {
  var text_colonne = block.getFieldValue('table');
  // TODO: Assemble JavaScript into code variable.
  var code = ' SUM ('+text_colonne+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_max'] = function(block) {
  var text_colonne = block.getFieldValue('table');
 // TODO: Assemble JavaScript into code variable.
  var code = ' MAX ('+text_colonne+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_min'] = function(block) {
  var text_colonne = block.getFieldValue('table');
  // TODO: Assemble JavaScript into code variable.
  var code = ' MIN ('+text_colonne+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_count'] = function(block) {
  var text_table = block.getFieldValue('table');
  // TODO: Assemble JavaScript into code variable.
  var code = ' COUNT ('+text_table+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_order_by'] = function(block) {
  var text_column = block.getFieldValue('column');
  // TODO: Assemble JavaScript into code variable.
  var code = ' ORDER BY '+text_column;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//fonction des blocks en PHP
Blockly.PHP['sql_select'] = function(block) {
  var value_select = Blockly.PHP.valueToCode(block, 'SELECT', Blockly.PHP.ORDER_NONE) || '\'\'';
  // TODO: Assemble PHP into code variable.
  var code = 'SELECT ' + value_select;
  return code;
};

Blockly.PHP['sql_from'] = function(block) {
  var value_from = Blockly.PHP.valueToCode(block, 'FROM', Blockly.PHP.ORDER_NONE);
  // TODO: Assemble PHP into code variable.
  var code = ' FROM ' + value_from;
  return code;
};

Blockly.PHP['sql_where'] = function(block) {
  var value_where = Blockly.PHP.valueToCode(block, 'WHERE', Blockly.PHP.ORDER_NONE);
  // TODO: Assemble PHP into code variable.
  var code = ' WHERE ' + value_where;
  return code;
};

Blockly.PHP['sql_table'] = function(block) {
  var text_table = block.getFieldValue('table');
  // TODO: Assemble PHP into code variable.
  var code = text_table;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_column'] = function(block) {
  var text_table = block.getFieldValue('table');
  var text_column = block.getFieldValue('column');
  // TODO: Assemble PHP into code variable.
  var code = text_table + '.' + text_column;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_as'] = function(block) {
  var value_as = Blockly.PHP.valueToCode(block, 'AS', Blockly.PHP.ORDER_NONE);
  var text_alias = block.getFieldValue('alias');
  // TODO: Assemble PHP into code variable.
  var code = value_as + ' AS ' + text_alias;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_add'] = function(block) {
  var value_add = Blockly.PHP.valueToCode(block, 'ADD', Blockly.PHP.ORDER_NONE) || '\'\'';
  // TODO: Assemble PHP into code variable.
  var code = ' , ' + value_add;
  return code;
};

Blockly.PHP['sql_and'] = function(block) {
  var value_and = Blockly.PHP.valueToCode(block, 'AND', Blockly.PHP.ORDER_NONE);
  // TODO: Assemble PHP into code variable.
  var code = ' AND '+ value_and;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_or'] = function(block) {
  var value_or = Blockly.PHP.valueToCode(block, 'OR', Blockly.PHP.ORDER_NONE);
  // TODO: Assemble PHP into code variable.
  var code = ' OR ' + value_or;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_condition'] = function(block) {
  var text_condition = block.getFieldValue('condition');
  var value_condition = Blockly.PHP.valueToCode(block, 'CONDITION', Blockly.PHP.ORDER_NONE);
  // TODO: Assemble PHP into code variable.
  var code = text_condition + value_condition;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_f_sum'] = function(block) {
  var text_colonne = block.getFieldValue('table');
  // TODO: Assemble PHP into code variable.
  var code = ' SUM ('+text_colonne+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_f_max'] = function(block) {
  var text_colonne = block.getFieldValue('table');
  // TODO: Assemble PHP into code variable.
  var code = ' MAX ('+text_colonne+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_f_min'] = function(block) {
  var text_colonne = block.getFieldValue('table');
  // TODO: Assemble PHP into code variable.
  var code = ' MIN ('+text_colonne+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_f_count'] = function(block) {
  var text_table = block.getFieldValue('table');
  // TODO: Assemble PHP into code variable.
  var code = ' COUNT ('+text_table+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sql_order_by'] = function(block) {
  var text_column = block.getFieldValue('column');
  // TODO: Assemble PHP into code variable.
  var code = ' ORDER BY ' +text_column;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};