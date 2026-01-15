import {storageService} from './storageService';
import {ShoppingItem, STORAGE_KEYS} from '@/src/Interfaces/InterfaceShopping';

class ShoppingStorageService {
  async loadItems(): Promise<ShoppingItem[]> {
    try {
      const items = await storageService.getItem<ShoppingItem[]>(
        STORAGE_KEYS.SHOPPING_ITEMS,
      );
      return items ?? [];
    } catch (error) {
      console.error('Erro ao carregar itens:', error);
      return [];
    }
  }

  async saveItems(items: ShoppingItem[]): Promise<void> {
    try {
      await storageService.setItem(STORAGE_KEYS.SHOPPING_ITEMS, items);
    } catch (error) {
      console.error('Erro ao salvar itens:', error);
      throw error;
    }
  }

  async addItem(item: ShoppingItem): Promise<ShoppingItem[]> {
    try {
      const currentItems = await this.loadItems();
      const updatedItems = [...currentItems, item];
      await this.saveItems(updatedItems);
      return updatedItems;
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
      throw error;
    }
  }

  async updateItem(
    id: string,
    updates: Partial<ShoppingItem>,
  ): Promise<ShoppingItem[]> {
    try {
      const currentItems = await this.loadItems();
      const updatedItems = currentItems.map(item =>
        item.id === id ? {...item, ...updates} : item,
      );
      await this.saveItems(updatedItems);
      return updatedItems;
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
  }

  async deleteItem(id: string): Promise<ShoppingItem[]> {
    try {
      const currentItems = await this.loadItems();
      const updatedItems = currentItems.filter(item => item.id !== id);
      await this.saveItems(updatedItems);
      return updatedItems;
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      throw error;
    }
  }

  async clearAllItems(): Promise<void> {
    try {
      await storageService.removeItem(STORAGE_KEYS.SHOPPING_ITEMS);
    } catch (error) {
      console.error('Erro ao limpar lista:', error);
      throw error;
    }
  }
}

export const shoppingStorageService = new ShoppingStorageService();
