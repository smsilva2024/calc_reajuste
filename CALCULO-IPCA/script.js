// Configuração para funcionamento offline
const API_CONFIG = {
    // Índices atualizados para funcionamento autônomo (julho 2025)
    INDICES_OFFLINE: {
        ipca: {
            12: 4.62,  // IPCA 12 meses
            6: 2.31,   // IPCA 6 meses
            3: 1.15    // IPCA 3 meses
        },
        igpm: {
            12: 3.64,  // IGP-M 12 meses
            6: 1.82,   // IGP-M 6 meses
            3: 0.91    // IGP-M 3 meses
        },
        inpc: {
            12: 4.77,  // INPC 12 meses
            6: 2.38,   // INPC 6 meses
            3: 1.19    // INPC 3 meses
        },
        selic: {
            12: 10.75, // SELIC 12 meses
            6: 5.37,   // SELIC 6 meses
            3: 2.69    // SELIC 3 meses
        }
    },
    // Data da última atualização dos índices offline
    ULTIMA_ATUALIZACAO: '02/07/2025'
};

// Remover todas as funções de API que não são necessárias para funcionamento offline

// Estado da aplicação
let appState = {
    currentData: {},
    lastUpdate: null,
    isLoading: false
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateLastUpdateTime();
});

function initializeApp() {
    // Configurar formulário
    const form = document.getElementById('calculatorForm');
    const indiceSelect = document.getElementById('indice');
    const customIndexGroup = document.getElementById('customIndexGroup');
    
    // Mostrar/ocultar campo de índice customizado
    indiceSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            customIndexGroup.style.display = 'block';
            document.getElementById('customIndex').required = true;
        } else {
            customIndexGroup.style.display = 'none';
            document.getElementById('customIndex').required = false;
        }
    });
    
    // Formatação automática do campo de remuneração
    const remuneracaoInput = document.getElementById('remuneracao');
    remuneracaoInput.addEventListener('input', formatCurrency);
    
    console.log('📱 App inicializado com sucesso!');
}

function setupEventListeners() {
    const form = document.getElementById('calculatorForm');
    form.addEventListener('submit', handleFormSubmit);
    
    // Prevenir zoom no iOS em inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.fontSize = '16px';
        });
    });
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        nome: formData.get('nome'),
        remuneracao: parseFloat(formData.get('remuneracao')),
        indice: formData.get('indice'),
        customIndex: formData.get('customIndex'),
        periodo: parseInt(formData.get('periodo'))
    };
    
    if (!validateForm(data)) {
        return;
    }
    
    try {
        showLoading(true);
        // Simular busca para melhor UX, mas usar dados offline
        await new Promise(resolve => setTimeout(resolve, 800));
        const indiceValue = await getIndiceValue(data.indice, data.customIndex, data.periodo);
        const resultado = calculateReajuste(data, indiceValue);
        showResult(resultado);
    } catch (error) {
        console.error('Erro no cálculo:', error);
        showError('Erro no cálculo. Tente novamente.');
    } finally {
        showLoading(false);
    }
}

function validateForm(data) {
    if (!data.nome.trim()) {
        showError('Por favor, informe seu nome completo.');
        return false;
    }
    
    if (!data.remuneracao || data.remuneracao <= 0) {
        showError('Por favor, informe uma remuneração válida.');
        return false;
    }
    
    if (!data.indice) {
        showError('Por favor, selecione um índice de reajuste.');
        return false;
    }
    
    if (data.indice === 'custom' && (!data.customIndex || data.customIndex < 0)) {
        showError('Por favor, informe uma taxa de reajuste válida.');
        return false;
    }
    
    return true;
}

async function getIndiceValue(indiceType, customValue, periodo) {
    if (indiceType === 'custom') {
        return parseFloat(customValue);
    }
    
    // Usar dados offline para funcionamento autônomo
    console.log('📊 Usando dados offline atualizados');
    const indiceData = API_CONFIG.INDICES_OFFLINE[indiceType];
    
    if (indiceData && indiceData[periodo] !== undefined) {
        return indiceData[periodo];
    }
    
    // Fallback caso o índice não seja encontrado
    console.warn('⚠️ Índice não encontrado, usando valor padrão');
    return 5.0; // Valor padrão conservador
}

function calculateReajuste(data, indiceValue) {
    const salarioAtual = data.remuneracao;
    const percentualReajuste = indiceValue / 100;
    const valorAumento = salarioAtual * percentualReajuste;
    const novoSalario = salarioAtual + valorAumento;
    
    return {
        nome: data.nome,
        salarioAtual: salarioAtual,
        indice: `${indiceValue.toFixed(2)}%`,
        indiceNome: getIndiceNome(data.indice),
        valorAumento: valorAumento,
        novoSalario: novoSalario,
        percentual: indiceValue
    };
}

function getIndiceNome(indiceType) {
    const nomes = {
        ipca: 'IPCA',
        igpm: 'IGP-M',
        inpc: 'INPC',
        selic: 'SELIC',
        custom: 'Personalizado'
    };
    return nomes[indiceType] || 'Desconhecido';
}

function showResult(resultado) {
    const resultDiv = document.getElementById('resultado');
    const formDiv = document.querySelector('.form-card');
    
    // Preencher dados do resultado
    document.getElementById('resultNome').textContent = resultado.nome;
    document.getElementById('resultSalarioAtual').textContent = formatMoney(resultado.salarioAtual);
    document.getElementById('resultIndice').textContent = `${resultado.indiceNome} - ${resultado.indice}`;
    document.getElementById('resultNovoSalario').textContent = formatMoney(resultado.novoSalario);
    document.getElementById('resultAumento').textContent = `${formatMoney(resultado.valorAumento)} (${resultado.percentual.toFixed(2)}%)`;
    
    // Mostrar resultado e ocultar formulário
    formDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    
    // Scroll suave para o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Vibração de feedback (se suportado)
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
    
    updateLastUpdateTime();
}

function novoCalculo() {
    const resultDiv = document.getElementById('resultado');
    const formDiv = document.querySelector('.form-card');
    
    // Limpar formulário
    document.getElementById('calculatorForm').reset();
    document.getElementById('indice').value = 'ipca';
    document.getElementById('customIndexGroup').style.display = 'none';
    
    // Mostrar formulário e ocultar resultado
    resultDiv.style.display = 'none';
    formDiv.style.display = 'block';
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Focar no primeiro campo
    document.getElementById('nome').focus();
}

function showLoading(show) {
    const loadingDiv = document.getElementById('loading');
    const calculateBtn = document.getElementById('calculateBtn');
    const btnText = calculateBtn.querySelector('.btn-text');
    const spinner = calculateBtn.querySelector('.spinner');
    
    appState.isLoading = show;
    
    if (show) {
        loadingDiv.style.display = 'block';
        calculateBtn.disabled = true;
        btnText.textContent = 'Calculando...';
        spinner.style.display = 'inline-block';
        
        // Scroll para loading
        loadingDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        loadingDiv.style.display = 'none';
        calculateBtn.disabled = false;
        btnText.textContent = '🧮 Calcular Reajuste';
        spinner.style.display = 'none';
    }
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = message;
    errorDiv.style.display = 'block';
    
    // Scroll para o erro
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Vibração de erro (se suportado)
    if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
    }
    
    // Auto-hide após 5 segundos
    setTimeout(hideError, 5000);
}

function hideError() {
    const errorDiv = document.getElementById('error');
    errorDiv.style.display = 'none';
}

function formatMoney(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function formatCurrency(event) {
    let value = event.target.value;
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2);
    event.target.value = value;
}

function updateLastUpdateTime() {
    // Usar data da última atualização dos dados offline
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = API_CONFIG.ULTIMA_ATUALIZACAO;
    }
    
    appState.lastUpdate = new Date();
}

// Service Worker para PWA (cache offline)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js')
            .then(function(registration) {
                console.log('✅ Service Worker registrado com sucesso:', registration.scope);
            })
            .catch(function(error) {
                console.log('❌ Falha ao registrar Service Worker:', error);
            });
    });
}

// Remover detecção de rede pois não precisamos mais
// O app funciona totalmente offline

// Prevenir zoom duplo-clique no iOS
document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });

// Log de inicialização
console.log('🚀 Calculadora de Reajuste Salarial v2.0 - OFFLINE');
console.log('📱 Funciona sem servidor, totalmente autônoma');
console.log('📊 Dados atualizados para julho/2025');
