using System.Collections.Generic;

namespace web_api_core
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetOrders(string username);

        bool IsOwnerOfOrder(int orderId, string ownerId);
    }
}