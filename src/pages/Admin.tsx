import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Lead {
  id: string;
  name: string;
  business: string;
  phone: string;
  state: string;
  city: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      setLoading(true);
      const { data, error: err } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (err) throw err;
      setLeads(data || []);
    } catch (err: any) {
      setError(err.message || 'Erro ao carregar leads');
    } finally {
      setLoading(false);
    }
  }

  async function deleteLead(id: string) {
    if (!window.confirm('Tem certeza que deseja excluir este lead?')) return;

    const { error: err } = await supabase.from('leads').delete().eq('id', id);
    if (err) {
      alert('Erro ao excluir lead: ' + err.message);
      return;
    }
    setLeads(leads.filter((l) => l.id !== id));
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-5xl">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin — Leads Recebidos</h1>
            <p className="text-gray-600 mt-2">Gerencie as solicitações de demonstração enviadas pelo site.</p>
          </div>
          <button
            onClick={fetchLeads}
            className="btn-primary px-6 py-2 text-sm"
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            🔄 Atualizar
          </button>
        </header>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Nome</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Negócio</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">WhatsApp</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Estado</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Cidade</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Mensagem</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Data</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    Nenhum lead encontrado.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{lead.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.business || '—'}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.state}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.city || '—'}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                      {lead.message || '—'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(String(lead.created_at)).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Total de leads: {leads.length}
        </p>
      </div>
    </div>
  );
}
