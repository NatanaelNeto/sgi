$(document).ready(function(){

	
	$('#button').click(function(){

		var input = document.getElementById("avenger").value;
		switch(true){

			//VIVOS
			case input === "Capitão América" || input === "capitão américa" || input === "Capitão américa":
			$('#setThis').text("Vivo");
			$('#sub').text("Mas agora se chama Nômade");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Tony Stark" || input === "Tony stark" || input === "tony stark" || input === "Homem de Ferro" || input === "Homem de ferro" || input === "homem de ferro" || input === "Tony" || input === "tony" || input === "Stark" || input === "stark":
			$('#setThis').text("Vivo");
			$('#sub').text("Tá perdido no espaço com um monte de destroços de nave e uma robô assassina, mas passa bem");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Thor" || input === "thor":
			$('#setThis').text("Vivo");
			$('#sub').text("O cara agora tá brabo com um machado que abre a Byfrost em quem ele quiser. Mas não conseguiu parar Thanos");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Viúva Negra" || input === "Viúva negra" || input === "viúva negra" || input === "Natasha Romanoff" || input === "Natasha" || input === "natasha":
			$('#setThis').text("Viva");
			$('#sub').text("É ou não é um mulherão mesmo? Lutou com dois filhos do roxão, achou o verdão e saiu viva");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Hulk" || input === "hulk" || input === "Bruce Banner" || input === "Bruce banner" || input === "bruce banner" || input === "Bruce" || input === "bruce":
			$('#setThis').text("Vivo");
			$('#sub').text("Mas o Hulk tá com muito cagaço pro Thanos. Por isso a tela não ficou verde");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Rocket" || input === "rocket" || input === "Lebre" || input === "lebre":
			$('#setThis').text("Vivo");
			$('#sub').text("E sem o braço de Bucky. Tadinho da lebre...");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Máquina de Guerra" || input === "Máquina de guerra" || input === "máquina de guerra" || input === "Máquina de Combate" || input === "Máquina de combate" || input === "máquina de combate" || input === "Rhodes" || input === "rhodes":
			$('#setThis').text("Vivo");
			$('#sub').text("O cara agora tá brabo com um machado que abre a Byfrost em quem ele quiser. Mas não conseguiu parar Thanos");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Thanos" || input === "thanos":
			$('#setThis').text("Vivo");
			$('#sub').text("Por incrível que pareça");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Okoye" || input === "okoye":
			$('#setThis').text("Vivo");
			$('#sub').text("E não por culpa do Vibranium, diga-se de passagem");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Nebulosa" || input === "nebulosa":
			$('#setThis').text("Vivo");
			$('#sub').text("Ela é difícil de morrer mesmo. Mas passou perto");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "M'Baku" || input === "m'baku":
			$('#setThis').text("Vivo");
			$('#sub').text("E talvez o único da tribo dele");
			$('.back').css({"background-color": "#8BC34A"});
			break;

			case input === "Eu" || input === "eu":
			$('#setThis').text("Vivo");
			$('#sub').text("Suponho. Se você está nesse site, tá vivo, né?");
			$('.back').css({"background-color": "#8BC34A"});
			break;
			




			//MORTOS
			case input === "Heimdall" || input === "Heindall" || input === "heimdall" || input === "heindall":
			$('#setThis').text("Morreu");
			$('#sub').text("Não tinha nem 2 minutos de filme, vey... ='(");
			$('.back').css({"background-color": "#ef5350"});
			break;
			
			case input === "Loki" || input === "loki":
			$('#setThis').text("Morreu");
			$('#sub').text("Ah, vai, você passou todo esse tempo desejando isso... Mas doeu em mim também");
			$('.back').css({"background-color": "#ef5350"});
			break;
			
			case input === "Groot" || input === "groot":
			$('#setThis').text("Eu sou Groot");
			$('#sub').text("Eu sou Groot ='(");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Gamora" || input === "gamora":
			$('#setThis').text("Morreu");
			$('#sub').text("Mermão, né que Thanos realmente amava ela? Fiquei bad com ele chorando");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Drax" || input === "drax":
			$('#setThis').text("Morreu");
			$('#sub').text("Pelo menos agora tá junto da família");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Peter Quill" || input === "Peter quill" || input === "peter quill":
			$('#setThis').text("Morreu");
			$('#sub').text("Senhor das Estrelas virou pó...");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Mantis" || input === "mantis":
			$('#setThis').text("Morreu");
			$('#sub').text("Bixinha. Não merecia...");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Pantera Negra" || input === "Pantera negra" || input === "Pantera" || input === "pantera" || input === "pantera negra":
			$('#setThis').text("Morreu");
			$('#sub').text("Vibranium não protege de tudo, não é mesmo?");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Soldado Invernal" || input === "soldado invernal" || input === "Bucky" || input === "Lobo Branco" || input === "bucky" || input === "Soldado invernal" || input === "Bucky Barnes" || input === "Bucky barnes" || input === "Lobo branco" || input === "lobo branco":
			$('#setThis').text("Morreu");
			$('#sub').text("E o braço foi junto");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Falcão" || input === "falcão":
			$('#setThis').text("Morreu");
			$('#sub').text("E voou pelos ares");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Visão" || input === "visão":
			$('#setThis').text("Morreu");
			$('#sub').text("Mas perae, não é bem um spoiler, né? Ele tinha uma jóia na testa, poxa...");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Feiticeira Escarlate" || input === "Feiticeira escarlate" || input === "Feiticeira" || input === "feiticeira" || input === "Wanda Maximoff" || input === "Wanda" || input === "wanda":
			$('#setThis').text("Morreu");
			$('#sub').text("Durou mais que o irmão. Sabe, ele foi embora muito rápido...");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Doutor Estranho" || input === "Doutor estranho" || input === "doutor estranho" || input === "dr estranho" || input === "Dr Estranho" || input === "Dr estranho" || input === "Stephen Strange":
			$('#setThis').text("Morreu");
			$('#sub').text("Era o único jeito deles vencerem. Só confia");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Homem Aranha" || input === "homem aranha" || input === "Homem-Aranha" || input === "homem-aranha" || input === "Homem-aranha" || input === "Peter Parker" || input === "peter parker":
			$('#setThis').text("Morreu");
			$('#sub').text("E Stark não pôde fazer nada. As lágrimas de todos saltaram na hora, vey... Foi pesado demais");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Maria Hill" || input === "Hill" || input === "Agente Hill" || input === "maria hill" || input === "hill":
			$('#setThis').text("Morreu");
			$('#sub').text("Nem todos podem sair vivos");
			$('.back').css({"background-color": "#ef5350"});
			break;

			case input === "Nick Fury" || input === "Nick" || input === "Fury" || input === "Nick fury" || input === "nick" || input === "fury":
			$('#setThis').text("Morreu");
			$('#sub').text("O cara sobreviveu a um tiro cravado no peito, mas não a um estalar de dedos... Poxa...");
			$('.back').css({"background-color": "#ef5350"});
			break;
			




			//INDEFINIDOS

			case input === "Shuri" || input === "shuri":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Ela tava de boas cuidando do visão, depois ficou não tão de boas, mas ninguém sabe quão de boas ela tá...");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Caveira Vermelha" || input === "Caveira vermelha" || input === "caveira vermelha":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Eu também fiquei surpreso com ele lá");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Wong" || input === "wong":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Ficou protegendo o templo. Mas será que ficou mesmo?");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Pepper Potts" || input === "Pepper potts" || input === "pepper potts" || input === "Pepper" || input === "pepper":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Ninguém sabe mesmo, assim como ninguém sabe como ela apareceu depois de tanto tempo");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Eltrl" || input === "eltrl":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Tomara que tenha vivido. Queremos mais uma manopla, não?");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Gavião Arqueiro" || input === "Gavião arqueiro" || input === "gavião arqueiro" || input === "Clint" || input === "clint":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Tava de boas lá, com a esposa, com os filhotes... Tava, eu não sei se ainda tá");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Homem Formiga" || input === "Homem formiga" || input === "homem formiga" || input === "Vespa" || input === "vespa":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Acho que sim, afinal tá pra sair o filme aí né?");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Capitã Marvel" || input === "Capitã marvel" || input === "capitã marvel" || input === "Carol Danvers" || input === "Carol danvers" || input === "carol danvers" || input === "Carol Denvers" || input === "Carol denvers" || input === "carol denvers":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Mas perae, se não for ela que vai consertar tudo, quem vai?");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Valquíria" || input === "valquíria" || input === "Korg" || input === "korg" || input === "Meek" || input === "meek":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Não sabemos se sobreviveu ao ataque. Espero que sim ^^");
			$('.back').css({"background-color": "#fdd835"});
			break;

			case input === "Você" || input === "você" || input === "Natanael Neto" || input === "Natanael neto" || input === "natanael neto" || input === "Neto" || input === "neto":
			$('#setThis').text("Ninguém sabe");
			$('#sub').text("Fiquei vivo, um monte de gente começou a desaparecer, aí saí escrevendo aqui. Pera, que formigamento é es");
			$('.back').css({"background-color": "#fdd835"});
			break;

			default:
			$('#setThis').text("Desculpe, não entendi!");
			$('#sub').text("Se for alguém, tem 50% de chance de estar vivo. Se não, verifica a escrita, por favor? <3")
			$('.back').css({"background-color": "#fdd835"});
			break;
		}
	});
	});