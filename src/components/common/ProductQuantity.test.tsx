import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductQuantity from './ProductQuantity';

describe('Komponen ProductQuantity', () => {
  
  it('harus menampilkan angka 1 saat pertama kali web dibuka', () => {
    render(<ProductQuantity />); // Robot merender komponen
    const nilai = screen.getByTestId('nilai-jumlah'); // Robot melihat layar
    expect(nilai.textContent).toBe('1'); // Ekspektasi: Tulisannya harus '1'
  });

  it('angka harus berubah jadi 2 kalau tombol tambah (+) diklik', () => {
    render(<ProductQuantity />);
    const btnTambah = screen.getByTestId('btn-tambah');
    
    fireEvent.click(btnTambah); // Robot pura-pura ngeklik tombol +
    
    const nilai = screen.getByTestId('nilai-jumlah');
    expect(nilai.textContent).toBe('2'); // Ekspektasi: Tulisannya berubah jadi '2'
  });

  it('angka tidak boleh jadi 0 meskipun tombol kurang (-) diklik saat nilainya 1', () => {
    render(<ProductQuantity />);
    const btnKurang = screen.getByTestId('btn-kurang');
    
    fireEvent.click(btnKurang); // Robot ngeklik tombol -, padahal angka awal 1
    
    const nilai = screen.getByTestId('nilai-jumlah');
    expect(nilai.textContent).toBe('1'); // Ekspektasi: Harus tetap '1', proteksinya jalan!
  });

});