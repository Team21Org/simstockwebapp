import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient().$extends({
  query: {
    user: {
      $allOperations({ operation, args, query }) {
        if (['create', 'update'].includes(operation)) {

        if (args && 'data' in args && args.data['password']) {
          args.data['password'] = bcrypt.hashSync(args.data['password'], 10)
        }
        return query(args)
      }
    }
  }
}
})