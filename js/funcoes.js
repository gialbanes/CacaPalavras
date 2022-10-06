 matriz = new Array;
    document.write("<table border='0'>" + "<tr>");
        matriz = [
        ["<td>W</td>","<td>O</td>","<td>G</td>","<td  class='dustin'>E</td>"," <td  class='dustin'>L</td>","<td  class='dustin'>E</td>","<td  class='dustin'>V</td>","<td  class='dustin'>E</td>","<td  class='dustin'>N</td>","<td>W</td>","<td>E</td>","<td>T</td>",], 
        ["<td>E</td>","<td>W</td>",	"<td>A</td>",	"<td>I</td>",	"<td class='dustin'>D</td>",	"<td class='dustin'>U</td>",	"<td class='dustin'>S</td>",	"<td class='dustin'>T</td>",	"<td class='dustin'>I</td>",	"<td class='dustin'>N</td>",	"<td>E</td>",	"<td class='dustin'>S</td>"],
        ["<td>E</td>",	"<td>B</td>",	"<td>B</td>",	"<td>N</td>",	"<td>I</td>",	"<td>C</td>",	"<td>M</td>",	"<td>U</td>",	"<td>A</td>",	"<td>E</td>",	"<td class='dustin'>T</td>",	"<td>N</td>"],
        ["<td class='dustin'>M</td>",	"<td  class='dustin'>A</td>",	"<td  class='dustin'>X</td>",	"<td>C</td>",	"<td>H</td>",	"<td>I</td>",	"<td>N</td>",	"<td>S</td>",	"<td>E</td>",	"<td class='dustin'>E</td>",	"<td>E</td>",	"<td>S</td>"],
        ["<td class='dustin'>I</td>",	"<td>T</td>",	"<td>H</td>",	"<td>R</td>",	"<td>M</td>",	"<td class='dustin'>N</td>",	"<td>W</td>",	"<td>E</td>",	"<td class='dustin'>V</td>",	"<td>O</td>",	"<td class='dustin'>B</td>",	"<td>T</td>"],
        ["<td class='dustin'>K</td>",	"<td>E</td>",	"<td>M</td>",	"<td>N</td>",	"<td>C</td>",	"<td class='dustin'>A</td>",	"<td>T</td>",	"<td class='dustin'>E</td>",	"<td>H</td>",	"<td>O</td>",	"<td class='dustin'>I</td>",	"<td>A</td>"],
        ["<td class='dustin'>E</td>",	"<td class='dustin'>W</td>",	"<td class='dustin'>J</td>",	"<td>E</td>",	"<td>I</td>",	"<td class='dustin'>N</td>",	"<td>O</td>",	"<td>S</td>",	"<td  class='dustin'>N</td>",	"<td>T</td>",	"<td class='dustin'>L</td>",	"<td>O</td>"],
        ["<td>Y</td>",	"<td>I</td>",	"<td class='dustin'>I</td>",	"<td>Y</td>",	"<td>H</td>",	"<td class='dustin'>C</td>",	"<td>W</td>",	"<td>B</td>",	"<td  class='dustin'>I</td>",	"<td>F</td>",	"<td class='dustin'>L</td>",	"<td>M</td>"],
        ["<td>H</td>",	"<td>S</td>",	"<td class='dustin'>M</td>",	"<td class='dustin'>L</td>",	"<td >M</td>",	"<td  class='dustin'>Y</td>",	"<td>J</td>",	"<td>C</td>",	"<td  class='dustin'>B</td>",	"<td>L</td>",	"<td class='dustin'>Y</td>",	"<td>S</td>"],
        ["<td>A</td>",	"<td>L</td>",	"<td>O</td>",	"<td>A</td>",	"<td class='dustin'>L</td>",	"<td>I</td>",	"<td>I</td>",	"<td>H</td>",	"<td  class='dustin'>O</td>",	"<td>R</td>",	"<td>H</td>",	"<td>E</td>"],
        ["<td>R</td>",	"<td>R</td>",	"<td>I</td>",	"<td>D</td>",	"<td>P</td>",	"<td>R</td>",	"<td>E</td>",	"<td>D</td>",	"<td  class='dustin'>R</td>",	"<td>C</td>",	"<td>K</td>",	"<td>I</td>"],
            ]

        for(linha=0;linha<12;linha++){
        for(coluna=0;coluna<12;coluna++){
        document.write(matriz[linha][coluna]);
        }
        document.write("</tr>");
    }