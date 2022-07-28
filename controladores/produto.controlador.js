const Produto = require('../modelos/produto.modelo');

class ProdutoControlador {
    async produto_inserir(req, res) {
        try {
            const produto = await Produto.create(req.body);
            if (!produto) return res.status(400).json({ error: 'Erro criação produto.' });
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async produto_listar(req, res) {
        try {
            const list = await Produto.find({}).sort({ name: 1 });
            if (!list) return res.status(406).json({ error: 'Erro lista produto.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async produto_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Produto.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta produto.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async produto_atualizar(req, res) {
        try {
            const data = await Produto.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização produto.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async produto_remover(req, res) {
        try {
            const data = await Produto.findByIdAndRemove(req.params.id);
            if (!data) return res.status(406).json({ error: 'Erro exclusão produto.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }
}

module.exports = ProdutoControlador;