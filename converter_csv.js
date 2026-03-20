/**
 * Script para limpar e converter o arquivo Produtos.csv
 * Copie este código e cole no console do navegador ou salve como .js
 */

function limparCSV() {
    // Copie o conteúdo do Produtos.csv aqui como string
    const csvOriginal = `COLE_AQUI_O_CONTEUDO_DO_CSV`;

    const linhas = csvOriginal.split('\n');
    const resultado = [];

    for (const linha of linhas) {
        if (!linha.trim()) continue;

        // Separar por ponto e vírgula
        const partes = linha.split(';');

        if (partes.length < 5) continue;

        // Extrair campos (índices fixos baseado na análise)
        const descricao = partes[0].trim();
        const codigo = partes[1].trim();
        let quantidade = partes[2].trim();
        const precoVenda = partes[3].trim();
        const precoCompra = partes[9].trim(); // Coluna 10 (índice 9)

        // Limpar quantidade negativa (converte para 0)
        quantidade = quantidade.replace(/['']/g, '');
        if (quantidade.includes('-')) {
            quantidade = '0';
        }

        // Se descrição é cabeçalho, pular
        if (descricao.toLowerCase().includes('descrição') || 
            descricao.toLowerCase().includes('código')) {
            continue;
        }

        // Limpar preços
        const pv = precoVenda.replace('R$', '').replace(/\s/g, '').replace(',', '.');
        const pc = precoCompra.replace('R$', '').replace(/\s/g, '').replace(',', '.');

        resultado.push(`${descricao};${codigo};${quantidade};${pv};${pc}`);
    }

    return resultado.join('\n');
}

// Para usar: cole o conteúdo do CSV na variável csvOriginal acima e execute
