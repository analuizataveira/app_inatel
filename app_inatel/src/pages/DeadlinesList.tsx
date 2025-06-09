import { useEffect, useState } from "react";
import { FaBell, FaBook, FaBriefcase, FaGraduationCap, FaSearch, FaUserGraduate } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import type { AcademicDeadline } from "../interface/AcademicDeadline";
import type { Reminder } from "../interface/Reminder";

export default function DeadlinesList() {
    const [deadlines, setDeadlines] = useState<AcademicDeadline[]>([]);
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [typeFilter, setTypeFilter] = useState<DeadlineType | ''>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    type DeadlineType = 'Matricula' | 'Prova' | 'TCC' | 'Estagio';

    // Simulação de dados - na prática viria de uma API
    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (!userData) {
            navigate('/login');
        }
        // Dados mockados baseados no UML e análise de tarefas
        const mockDeadlines: AcademicDeadline[] = [
            {
                id: 1,
                title: 'Matrícula para o próximo semestre',
                type: 'Matricula',
                startDate: new Date('2023-11-01'),
                endDate: new Date('2023-11-15'),
                description: 'Período para realizar a matrícula nas disciplinas do próximo semestre',
                subject: 'AC9',
                relatedCourse: 'Engenharia de Software'
            },
            {
                id: 2,
                title: 'Prova de Banco de Dados',
                type: 'Prova',
                startDate: new Date('2023-11-20'),
                endDate: new Date('2023-11-20'),
                description: 'Prova bimestral na sala 205',
                subject: 'Banco de Dados',
                relatedCourse: 'Engenharia de Software'
            },
            {
                id: 3,
                title: 'Entrega do TCC',
                type: 'TCC',
                startDate: new Date('2023-12-10'),
                endDate: new Date('2023-12-10'),
                description: 'Entregar a versão final do TCC na secretaria',
                subject: 'Trabalho de Conclusão de Curso',
                relatedCourse: 'Engenharia de Software'
            },
            {
                id: 4,
                title: 'Relatório de Estágio',
                type: 'Estagio',
                startDate: new Date('2023-11-30'),
                endDate: new Date('2023-11-30'),
                description: 'Entregar o relatório parcial de estágio',
                subject: 'Estágio Supervisionado',
                relatedCourse: 'Engenharia de Software'
            }
        ];

        const mockReminders: Reminder[] = [
            {
                id: 1,
                deadlineId: 1,
                userId: 1,
                alarmDate: new Date('2023-11-14'),
                notificationType: 'Push',
                active: true
            }
        ];

        setDeadlines(mockDeadlines);
        setReminders(mockReminders);
        setLoading(false);
    }, [navigate]);


    const filterByType = (type: DeadlineType | '') => {
        setTypeFilter(type);
    };

    const searchByKeyword = (term: string) => {
        setSearchTerm(term);
    };

    const toggleReminder = (deadlineId: number) => {
        const existingReminder = reminders.find(r => r.deadlineId === deadlineId);

        if (existingReminder) {
            // Desativar lembrete
            setReminders(reminders.filter(r => r.deadlineId !== deadlineId));
        } else {
            // Ativar lembrete (padrão: 1 dia antes por push)
            const newReminder: Reminder = {
                id: Math.max(0, ...reminders.map(r => r.id)) + 1,
                deadlineId,
                userId: 1, // ID do usuário logado
                alarmDate: new Date(deadlines.find(d => d.id === deadlineId)!.endDate.getTime() - 24 * 60 * 60 * 1000),
                notificationType: 'Push',
                active: true
            };
            setReminders([...reminders, newReminder]);
        }
    };

    // Filtragem combinada
    const filteredDeadlines = deadlines.filter(deadline => {
        const matchesType = !typeFilter || deadline.type === typeFilter;
        const matchesSearch = !searchTerm ||
            deadline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            deadline.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (deadline.subject && deadline.subject.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesType && matchesSearch;
    });

    // Formatar data para exibição
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Componente de card de prazo
    const DeadlineCard = ({ deadline }: { deadline: AcademicDeadline }) => {
        const hasReminder = reminders.some(r => r.deadlineId === deadline.id);
        const typeIcon = {
            'Matricula': <FaUserGraduate className="text-blue-500" />,
            'Prova': <FaBook className="text-red-500" />,
            'TCC': <FaGraduationCap className="text-green-500" />,
            'Estagio': <FaBriefcase className="text-purple-500" />
        }[deadline.type];

        return (
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow mb-4">
                <div className="card-body">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="card-title flex items-center gap-2">
                                {typeIcon}
                                {deadline.title}
                            </h3>
                            <div className="badge badge-outline">{deadline.type}</div>
                            {deadline.subject && <div className="badge badge-outline ml-2">{deadline.subject}</div>}
                        </div>
                        <button
                            onClick={() => toggleReminder(deadline.id)}
                            className={`btn btn-circle btn-sm ${hasReminder ? 'btn-primary' : 'btn-ghost'}`}
                        >
                            <FaBell />
                        </button>
                    </div>

                    <div className="mt-2">
                        <p><strong>Período:</strong> {formatDate(deadline.startDate)} - {formatDate(deadline.endDate)}</p>
                        <p className="mt-1">{deadline.description}</p>
                    </div>

                    <div className="card-actions justify-end mt-2">
                        <button className="btn btn-sm btn-outline">Ver detalhes</button>
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <Navbar></Navbar>

            {/* Filtros e busca - baseado na análise de tarefas */}
            <div className="bg-base-100 p-4 rounded-lg shadow-md mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Filtro por tipo - baseado no UML */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Filtrar por tipo</span>
                        </label>
                        <select
                            className="select select-bordered"
                            value={typeFilter}
                            onChange={(e) => filterByType(e.target.value as DeadlineType | '')}
                        >
                            <option value="">Todos os tipos</option>
                            <option value="Matricula">Matrícula</option>
                            <option value="Prova">Prova</option>
                            <option value="TCC">TCC</option>
                            <option value="Estagio">Estágio</option>
                        </select>
                    </div>

                    {/* Busca por palavra-chave - baseado no UML e análise de tarefas */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Buscar</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Digite uma palavra-chave..."
                                className="input input-bordered w-full pr-10"
                                value={searchTerm}
                                onChange={(e) => searchByKeyword(e.target.value)}
                            />
                            <FaSearch className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista de prazos */}
            <div className="mb-8">
                {filteredDeadlines.length > 0 ? (
                    filteredDeadlines.map(deadline => (
                        <DeadlineCard key={deadline.id} deadline={deadline} />
                    ))
                ) : (
                    <div className="text-center p-8 bg-base-100 rounded-lg">
                        <p className="text-lg">Nenhum prazo encontrado com os filtros selecionados</p>
                        <button
                            className="btn btn-ghost mt-4"
                            onClick={() => {
                                setTypeFilter('');
                                setSearchTerm('');
                            }}
                        >
                            Limpar filtros
                        </button>
                    </div>
                )}
            </div>

            {/* Seção de lembretes ativos - baseado no UML */}
            {reminders.length > 0 && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <FaBell className="text-blue-500" />
                        Seus Lembretes Ativos
                    </h2>
                    <ul className="space-y-2">
                        {reminders.map(reminder => {
                            const deadline = deadlines.find(d => d.id === reminder.deadlineId);
                            return deadline ? (
                                <li key={reminder.id} className="flex justify-between items-center">
                                    <span>
                                        <strong>{deadline.title}</strong> - Alarme em {formatDate(reminder.alarmDate)}
                                    </span>
                                    <button
                                        onClick={() => toggleReminder(reminder.deadlineId)}
                                        className="btn btn-xs btn-error"
                                    >
                                        Remover
                                    </button>
                                </li>
                            ) : null;
                        })}
                    </ul>
                </div>
            )}

            {/* Espaço Publicitário Institucional */}
            <div className="bg-base-200 p-4 rounded-lg border border-base-300 mt-6">
                <h2 className="text-lg font-semibold mb-2">Dica da Faculdade 🎓</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <h3 className="font-bold text-base mb-1">📘 Precisa de ajuda com o TCC?</h3>
                        <p className="text-sm mb-2">Conheça a ferramenta <strong>XYZ TCC Pro</strong> com desconto exclusivo para alunos da faculdade!</p>
                        <a href="https://tccpro.exemplo.com" target="_blank" className="btn btn-sm btn-primary w-fit">Acessar ferramenta</a>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <h3 className="font-bold text-base mb-1">📚 Melhore seus estudos!</h3>
                        <p className="text-sm mb-2">Ganhe 3 meses grátis da plataforma <strong>Estuda+</strong> com simulados e correções automáticas.</p>
                        <a href="https://estudamais.exemplo.com" target="_blank" className="btn btn-sm btn-secondary w-fit">Conhecer agora</a>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">* Este espaço é gerenciado pela faculdade para apoiar sua jornada acadêmica.</p>
            </div>

        </div>
    );
}