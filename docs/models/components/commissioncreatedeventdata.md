# CommissionCreatedEventData

## Example Usage

```typescript
import { CommissionCreatedEventData } from "dub/models/components";

let value: CommissionCreatedEventData = {
  id: "cm_1JVR7XRCSR0EDBAF39FZ4PMYE",
  type: "click",
  amount: 9813.81,
  earnings: 9725.8,
  currency: "Afghani",
  status: "paid",
  invoiceId: "<id>",
  description:
    "elver progress before till bakeware pace carboxyl ha ultimately brown",
  quantity: 5399.46,
  metadata: {},
  createdAt: "1723119804503",
  updatedAt: "1735672685110",
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Rowena95@hotmail.com",
    image: "https://picsum.photos/seed/8GV3zH5uV/3049/5",
    payoutsEnabledAt: "<value>",
    country: "Tajikistan",
    totalClicks: 5726.54,
    totalLeads: 8652.1,
    totalConversions: 8447.98,
    totalSales: 991.26,
    totalSaleAmount: 3318.84,
    totalCommissions: 4366.14,
  },
  link: {
    id: "<id>",
    shortLink: "https://likable-thyme.org/",
    domain: "firsthand-swine.info",
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The commission's unique ID on Dub.                                                                                    | cm_1JVR7XRCSR0EDBAF39FZ4PMYE                                                                                          |
| `type`                                                                                                                | [components.CommissionCreatedEventType](../../models/components/commissioncreatedeventtype.md)                        | :heavy_check_mark:                                                                                                    | The type of commission. Can be `click`, `lead`, `sale`, `referral`, or `custom`.                                      |                                                                                                                       |
| `amount`                                                                                                              | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | The associated event amount in cents. For sale commissions, this is the sale amount.                                  |                                                                                                                       |
| `earnings`                                                                                                            | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | The amount earned by the partner, in cents.                                                                           |                                                                                                                       |
| `currency`                                                                                                            | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The currency of the commission, as an ISO 4217 currency code.                                                         |                                                                                                                       |
| `status`                                                                                                              | [components.CommissionCreatedEventStatus](../../models/components/commissioncreatedeventstatus.md)                    | :heavy_check_mark:                                                                                                    | The current status of the commission.                                                                                 |                                                                                                                       |
| `invoiceId`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The associated invoice ID. Only set for sale commissions.                                                             |                                                                                                                       |
| `description`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | An optional description of the commission.                                                                            |                                                                                                                       |
| `quantity`                                                                                                            | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | The event quantity. Used for click and lead commissions; typically `1` for sale and custom commissions.               |                                                                                                                       |
| `userId`                                                                                                              | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The user who created the manual commission.                                                                           |                                                                                                                       |
| `metadata`                                                                                                            | Record<string, *any*>                                                                                                 | :heavy_check_mark:                                                                                                    | Metadata from the associated lead or sale event (`lead.metadata` / `sale.metadata`), or from Stripe webhook metadata. |                                                                                                                       |
| `createdAt`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The date and time when the commission was created.                                                                    |                                                                                                                       |
| `updatedAt`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The date and time when the commission was last updated.                                                               |                                                                                                                       |
| `partner`                                                                                                             | [components.CommissionCreatedEventPartner](../../models/components/commissioncreatedeventpartner.md)                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `customer`                                                                                                            | [components.CommissionCreatedEventCustomer](../../models/components/commissioncreatedeventcustomer.md)                | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `link`                                                                                                                | [components.CommissionCreatedEventLink](../../models/components/commissioncreatedeventlink.md)                        | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |