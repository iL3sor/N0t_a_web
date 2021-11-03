const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Softdelete = require('mongoose-delete')
const Schema = mongoose.Schema;

const header = new Schema({
    name: {type: String, default: '_'},
    link: {type: String, default: '/'},
    slug: {type: String, slug: "name"}
});
mongoose.plugin(slug)
mongoose.plugin(Softdelete, {
    deletedAt : true ,
    overrideMethods : true})

module.exports = mongoose.model('header', header);