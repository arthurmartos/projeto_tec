const Pagamento = require('../modelos/pagamento.modelo');

class PagamentoControlador {  
   async pagamento_inserir(req, res){
       try {
           const carrinho = await Pagamento.create(req.body);
           if (!carrinho) return res.status(400).json({ error: 'Erro na criação do pagamento.' });
           return res.status(200).json(carrinho);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async pagamento_listar(req, res){
        try {
            const list = await Pagamento.find({}).sort({ name: 1 });
            if (!list) return res.status(406).json({ error: 'Erro na lista de pagamentos.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async pagamento_buscar(req, res) {
        try {
            const data = await Pagamento.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro na atualização do pagamento.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async pagamento_atualizar(req, res) {
        try {
            const data = await Pagamento.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro na atualização do pagamento.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async pagamento_deletar(req, res) {
        try {
            const data = await Pagamento.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro na atualização do pagamento.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = PagamentoControlador;