## The database should have the following capabilities:

 OK - Admin users shall be able to login;
 OK - Admin users shall be able to create new admin users;
 OK - Admins can insert, delete and update products;
 OK - Admins can insert, delete and update orders;
 OK - Admins can insert, delete and update expenses;
 OK - clients are users that cannot log in to the admin website;
 OK - The system will have clients;
 OK - Admins can view client information (name, phone, address);
 OK - A client can purchase a product, it will result in a order;
 OK - A concluded order(paid) will result in a sale;
 - The system should be able to present a financial status based on sales and
    expenses;
 OK - reports should present data about sales (most sold product / least...) ;
 OK - reports should present data about clients (best clients / casual clients);
 OK - reports should be able to present data in a given time interval;
 OK - products should have categories
 OK - expenses should have categories
 OK - admins can put money in to the system (loan, investments)
 OK - expenses can have payment options (Money, card, transfer)

Admins : {
  [
    {
      id: string,
      email: string,
      password: string
    }
  ]
}

Clients : {
  [
    id: string,
    email: string,
    name: string,
    userName: string,
    password: string,
    dateEnrolled: timestamp,
    address: {
      street: string,
      number: number,
      complement: string,
      city: string,
      state: string,
      code: string
    }
  ]
}

Category : {
  [
    id: id,
    type: string, [product, expense, incoming, payment]
    name: string,
  ]
}

Products : {
  [
    id: id,
    name: string,
    price: number,
    category: string
  ]
}

Expenses : {
  [
    id: string,
    value: number,
    category: string,
    payment: string,
    payee: string
    date: date,
  ]
}

Incoming : {
  [
    id: string,
    value: number,
    category: string,
    payment: string,
    payee: string,
    date: date
  ]
}

Orders : {
  [
    id: userID_timestamp,
    totalValue: number,
    date: timestamp,
    deliveryDate: date,
    customer: {
      id: string,
      email: string,
      name: string,
      userName: string,
      password: string,
      dateEnrolled: timestamp,
    },
    deliveryAddress: {
      street: string,
      number: number,
      complement: string,
      city: string,
      state: string,
      code: string
    },
    product: {
      name: string,
      price: number,
      category: string
    },
    paid: boolean
  ]
}
