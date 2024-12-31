const grpc = require('@grpc/grpc-js')
const PROTO_PATH = './news.proto'
var protoLoader = require('@grpc/proto-loader')

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options)
const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService

const client = new NewsService(
  'localhost:50051',
  grpc.credentials.createInsecure()
)

module.exports = client
