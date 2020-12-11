///creation de blocks personalisé///

////creation des blocks////

Blockly.Blocks['sql_table'] = {
  init: function() {
    this.appendValueInput("TABLE")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("table"), "table");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("*");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("select all");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_column'] = {
  init: function() {
    this.appendValueInput("COLUMN")
        .setCheck(null)
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
    this.appendValueInput("AS_PLUS")
        .setCheck(null)
        .appendField("AS")
        .appendField(new Blockly.FieldTextInput("alias"), "alias")
        .appendField(" ");
    this.setInputsInline(true);
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

Blockly.Blocks['sql_not'] = {
  init: function() {
    this.appendValueInput("NOT")
        .setCheck(null)
        .appendField("NOT");
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

Blockly.Blocks['sql_f_avg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AVG (")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField(" )");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_f_round'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ROUND(")
        .appendField(new Blockly.FieldTextInput("column"), "column")
        .appendField(")");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_order_by'] = {
  init: function() {
    this.appendValueInput("ORDER_BY")
        .setCheck(null)
        .appendField("ORDER BY")
        .appendField(new Blockly.FieldTextInput("column"), "ORDER_BY_COLUMN")
        .appendField(new Blockly.FieldDropdown([["ASC","ASC"], ["DESC","DESC"]]), "ORDER_BY_SENS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["IS NULL","null"], ["IS NOT NULL","not_null"]]), "dropdown_null");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_join'] = {
  init: function() {
    this.appendValueInput("JOIN")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["INNER JOIN","inner"], ["LEFT JOIN","left"], ["RIGHT JOIN","right"], ["FULL JOIN","full"]]), "dropdown_join");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_in'] = {
  init: function() {
    this.appendStatementInput("IN")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["IN","IN"], ["NOT IN","NOT IN"]]), "dropdown_in");
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sql_compare'] = {
  init: function() {
        this.appendValueInput("COMPARED")
        .setCheck(null);
    this.appendValueInput("COMPARE")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["=","="], [">",">"], ["<","<"], [">=",">="], ["<=","<="], ["<>","<>"]]), "dropdown_compare");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(42);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////fonction des blocks en passant par les fichier JavaScript pour l'affichage////
Blockly.JavaScript['sql_table'] = function(block) {
  var text_table = block.getFieldValue('table');
  var value_table = Blockly.JavaScript.valueToCode(block, 'TABLE', Blockly.JavaScript.ORDER_NONE);

  var code = text_table + value_table;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_all'] = function(block) {

  var code = '*';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_column'] = function(block) {
  var text_table = block.getFieldValue('table');
  var text_column = block.getFieldValue('column');
  var value_column = Blockly.JavaScript.valueToCode(block, "COLUMN", Blockly.JavaScript.ORDER_NONE);

  var code = text_table + '.' + text_column;
  if (value_column != "") {
    code += ' , ' + value_column;
  };

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_as'] = function(block) {
  var value_as = Blockly.JavaScript.valueToCode(block, 'AS', Blockly.JavaScript.ORDER_NONE);
  var text_alias = block.getFieldValue('alias');
  var value_as_plus = Blockly.JavaScript.valueToCode(block, 'AS_PLUS', Blockly.JavaScript.ORDER_NONE);

  var code = value_as + ' AS ' + text_alias;
  if (value_as_plus != "") {
    code += " , " + value_as_plus;
  };

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_add'] = function(block) {
  var value_add = Blockly.JavaScript.valueToCode(block, 'ADD', Blockly.JavaScript.ORDER_NONE) || '\'\'';

  var code = ' , ' + value_add;
  return code;
};

Blockly.JavaScript['sql_or'] = function(block) {
  var value_or = Blockly.JavaScript.valueToCode(block, 'OR', Blockly.JavaScript.ORDER_NONE);

  var code = ' OR '+value_or;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_not'] = function(block) {
  var value_not = Blockly.JavaScript.valueToCode(block, 'NOT', Blockly.JavaScript.ORDER_NONE);

  var code = ' NOT '+value_not;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_sum'] = function(block) {
  var text_column = block.getFieldValue('table');

  var code = ' SUM ('+text_column+') ';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_max'] = function(block) {
  var text_column = block.getFieldValue('table');

  var code = ' MAX ('+text_column+') ';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_min'] = function(block) {
  var text_column = block.getFieldValue('table');

  var code = ' MIN ('+text_column+') ';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_count'] = function(block) {
  var text_table = block.getFieldValue('table');

  var code = ' COUNT ('+text_table+') ';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_f_avg'] = function(block) {
  var text_table = block.getFieldValue('table');

  var code = 'AVG ('+text_table+') ';
  return code;
};

Blockly.JavaScript['sql_f_round'] = function(block) {
  var text_column = block.getFieldValue('column');

  var code = ' ROUND('+text_column+') ';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sql_order_by'] = function(block) {

  var SENS = {
    'ASC': [' ASC '],
    'DESC': [' DESC ']
  }
  var tuple = SENS[block.getFieldValue('ORDER_BY_SENS')];
  var sens = tuple[0];


  var text_order_by_column = block.getFieldValue('ORDER_BY_COLUMN');

  var value_order_by = Blockly.JavaScript.valueToCode(block,'ORDER_BY', Blockly.JavaScript.ORDER_NONE);

  var code = " ORDER BY " + text_order_by_column + sens + value_order_by;

  return code;
};

Blockly.JavaScript['sql_null'] = function(block) {
  var NULL = {
    'null': [' IS NULL '],
    'not_null': [' IS NOT NULL ']
  }
  var tuple = NULL[block.getFieldValue('dropdown_null')];
  var drop = tuple[0];

  var code = drop;
  return [code, Blockly.JavaScript.ORDER_NONE];

}

Blockly.JavaScript['sql_join']= function(block){
  var JOIN = {
    'inner': [' INNER JOIN '],
    'right': [' RIGHT JOIN '],
    'left': [' LEFT JOIN '],
    'full': [' FULL JOIN ']
  }

  var tuple = JOIN[block.getFieldValue('dropdown_join')];
  var drop = tuple[0];

  var value_join = Blockly.JavaScript.valueToCode(block, 'JOIN', Blockly.JavaScript.ORDER_NONE);

  var code = drop + value_join;

  return [code, Blockly.JavaScript.ORDER_NONE];
}


Blockly.JavaScript['sql_in'] = function(block) {
  
  var IN ={
    'IN' : [' IN '],
    'NOT IN': [' NOT IN ']
  }

  var truple = IN[block.getFieldValue('dropdown_in')];
  var drop_in = truple[0];

  var statements_in = Blockly.JavaScript.statementToCode(block, 'IN');
  
  var code = drop_in + '(' + statements_in + ')' ;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.JavaScript['sql_compare'] = function(block) {
  
  var COMPARE = {
    '=': [' = '],
    '>': [' > '],
    '<': [' < '],
    '>=': [' >= '],
    '<=': [' <= '],
    '<>': [' <> ']
  }

  var truple = COMPARE[block.getFieldValue('dropdown_compare')];
  var drop_comp = truple[0];

  var value_compared = Blockly.JavaScript.valueToCode(block, 'COMPARED', Blockly.JavaScript.ORDER_NONE)
  var value_compare = Blockly.JavaScript.valueToCode(block, 'COMPARE', Blockly.JavaScript.ORDER_NONE);

  var code = value_compared + drop_comp + value_compare;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

