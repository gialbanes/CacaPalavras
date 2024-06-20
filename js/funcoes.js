 matriz = new Array; //cria uma array
    document.write("<table border='0'>" + "<tr>"); // início da tabela 
        matriz = [ // matriz com 12 linhas e 12 colunas, onde cada coluna é uma <td> com uma letra
        ["<td>W</td>","<td>O</td>","<td>G</td>","<td  class='nomes'>E</td>"," <td  class='nomes'>L</td>","<td  class='nomes'>E</td>","<td  class='nomes'>V</td>","<td  class='nomes'>E</td>","<td  class='nomes'>N</td>","<td>W</td>","<td>E</td>","<td>T</td>",], 
        ["<td>E</td>","<td>W</td>",	"<td>A</td>",	"<td>I</td>",	"<td class='nomes'>D</td>",	"<td class='nomes'>U</td>",	"<td class='nomes'>S</td>",	"<td class='nomes'>T</td>",	"<td class='nomes'>I</td>",	"<td class='nomes'>N</td>",	"<td>E</td>",	"<td class='nomes'>S</td>"],
        ["<td>E</td>",	"<td>B</td>",	"<td>B</td>",	"<td>N</td>",	"<td>I</td>",	"<td>C</td>",	"<td>M</td>",	"<td>U</td>",	"<td>A</td>",	"<td>E</td>",	"<td class='nomes'>T</td>",	"<td>N</td>"],
        ["<td class='nomes'>M</td>",	"<td  class='nomes'>A</td>",	"<td  class='nomes'>X</td>",	"<td>C</td>",	"<td>H</td>",	"<td>I</td>",	"<td>N</td>",	"<td>S</td>",	"<td>E</td>",	"<td class='nomes'>E</td>",	"<td>E</td>",	"<td>S</td>"],
        ["<td class='nomes'>I</td>",	"<td>T</td>",	"<td>H</td>",	"<td>R</td>",	"<td>M</td>",	"<td class='nomes'>N</td>",	"<td>W</td>",	"<td>E</td>",	"<td class='nomes'>V</td>",	"<td>O</td>",	"<td class='nomes'>B</td>",	"<td>T</td>"],
        ["<td class='nomes'>K</td>",	"<td>E</td>",	"<td>M</td>",	"<td>N</td>",	"<td>C</td>",	"<td class='nomes'>A</td>",	"<td>T</td>",	"<td class='nomes'>E</td>",	"<td>H</td>",	"<td>O</td>",	"<td class='nomes'>I</td>",	"<td>A</td>"],
        ["<td class='nomes'>E</td>",	"<td class='nomes'>W</td>",	"<td class='nomes'>J</td>",	"<td>E</td>",	"<td>I</td>",	"<td class='nomes'>N</td>",	"<td>O</td>",	"<td>S</td>",	"<td  class='nomes'>N</td>",	"<td>T</td>",	"<td class='nomes'>L</td>",	"<td>O</td>"],
        ["<td>Y</td>",	"<td>I</td>",	"<td class='nomes'>I</td>",	"<td>Y</td>",	"<td>H</td>",	"<td class='nomes'>C</td>",	"<td>W</td>",	"<td>B</td>",	"<td  class='nomes'>I</td>",	"<td>F</td>",	"<td class='nomes'>L</td>",	"<td>M</td>"],
        ["<td>H</td>",	"<td>S</td>",	"<td class='nomes'>M</td>",	"<td class='nomes'>L</td>",	"<td >M</td>",	"<td  class='nomes'>Y</td>",	"<td>J</td>",	"<td>C</td>",	"<td  class='nomes'>B</td>",	"<td>L</td>",	"<td class='nomes'>Y</td>",	"<td>S</td>"],
        ["<td>A</td>",	"<td>L</td>",	"<td>O</td>",	"<td>A</td>",	"<td class='nomes'>L</td>",	"<td>I</td>",	"<td>I</td>",	"<td>H</td>",	"<td  class='nomes'>O</td>",	"<td>R</td>",	"<td>H</td>",	"<td>E</td>"],
        ["<td>R</td>",	"<td>R</td>",	"<td>I</td>",	"<td>D</td>",	"<td>P</td>",	"<td>R</td>",	"<td>E</td>",	"<td>D</td>",	"<td  class='nomes'>R</td>",	"<td>C</td>",	"<td>K</td>",	"<td>I</td>"],
            ]

        for(linha=0;linha<12;linha++){ // iteração das linhas da matriz 
        for(coluna=0;coluna<12;coluna++){ // iteração das colunas da matriz 
        document.write(matriz[linha][coluna]);
        }
        document.write("</tr>");
    }