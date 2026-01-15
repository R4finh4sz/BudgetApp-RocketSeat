import {useState, useEffect, useCallback} from 'react';
import {ShoppingItem} from '@/src/Interfaces/InterfaceShopping';
import {shoppingStorageService} from '@/src/Storage/Main/shoppingStorageService';

export function useShoppingStorage() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const loadedItems = await shoppingStorageService.loadItems();
      setItems(loadedItems);
    } catch (err) {
      setError('Erro ao carregar itens');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addItem = useCallback(async (item: ShoppingItem) => {
    try {
      const updatedItems = await shoppingStorageService.addItem(item);
      setItems(updatedItems);
      return true;
    } catch (err) {
      setError('Erro ao adicionar item');
      console.error(err);
      return false;
    }
  }, []);

  const updateItem = useCallback(
    async (id: string, updates: Partial<ShoppingItem>) => {
      try {
        const updatedItems = await shoppingStorageService.updateItem(
          id,
          updates,
        );
        setItems(updatedItems);
        return true;
      } catch (err) {
        setError('Erro ao atualizar item');
        console.error(err);
        return false;
      }
    },
    [],
  );

  const deleteItem = useCallback(async (id: string) => {
    try {
      const updatedItems = await shoppingStorageService.deleteItem(id);
      setItems(updatedItems);
      return true;
    } catch (err) {
      setError('Erro ao deletar item');
      console.error(err);
      return false;
    }
  }, []);

  const clearAllItems = useCallback(async () => {
    try {
      await shoppingStorageService.clearAllItems();
      setItems([]);
      return true;
    } catch (err) {
      setError('Erro ao limpar lista');
      console.error(err);
      return false;
    }
  }, []);

  return {
    items,
    isLoading,
    error,
    addItem,
    updateItem,
    deleteItem,
    clearAllItems,
    reloadItems: loadItems,
  };
}
