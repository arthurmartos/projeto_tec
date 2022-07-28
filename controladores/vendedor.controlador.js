const Vendedor = require('../modelo/vendedor.modelo');

class VendedorControlador {
    async vendedor_inserir(req, res) {
        try {
            const vendedor = await Vendedor.create(req.body);
            if (!vendedor) return res.status(400).json({ error: 'Erro criação vendedor.' });
            return res.status(200).json(vendedor);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async vendedor_listar(req, res) {
        try {
            const list = await Vendedor.find({}).sort({ name: 1 });
            if (!list) return res.status(406).json({ error: 'Erro lista vendedor.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async vendedor_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Vendedor.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta vendedor.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async vendedor_atualizar(req, res) {
        try {
            const data = await Vendedor.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização vendedor.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async vendedor_remover(req, res) {
        try {
            const data = await Vendedor.findByIdAndRemove(req.params.id);
            if (!data) return res.status(406).json({ error: 'Erro exclusão vendedor.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }
}

module.exports = VendedorControlador;