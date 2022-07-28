const Carrinho = require('../modelos/carrinho.modelo');

class CarrinhoControlador { 
   async carrinho_inserir(req, res){
       try {
           const carrinho = await Carrinho.create(req.body);
           if (!carrinho) return res.status(400).json({ error: 'Erro na criação do carrinho.' });
           return res.status(200).json(carrinho);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async carrinho_listar(req, res){
        try {
            const list = await Carrinho.find({}).sort({ name: 1 });
            if (!list) return res.status(406).json({ error: 'Erro na lista do carrinho.' });
            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async carrinho_atualizar(req, res) {
        try {
            const data = await Carrinho.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização carrinho.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }

    async carrinho_buscar(req,res){
        try {
            const { id } = req.params;
            const data = await Carrinho.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta carrinho.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async carrinho_deletar(req, res) {
        try {
            const data = await Carrinho.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização carrinho.' });
            return res.status(200).json(data);
        } catch {
            return res.status(400).json(error);
        }
    }
}

module.exports = CarrinhoControlador;