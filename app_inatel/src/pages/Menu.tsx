import { FaBook, FaBullhorn, FaCalendarAlt, FaChalkboardTeacher, FaFileAlt, FaGraduationCap, FaNewspaper, FaUserFriends } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function Menu() {
    return (
        <div className="min-h-screen bg-base-200">
            {/* Navbar */}
            <Navbar />

            {/* Conteúdo principal */}
            <div className="container mx-auto p-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card Notícias */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <div className="flex items-center">
                                <FaNewspaper className="text-3xl text-primary mr-3" />
                                <h2 className="card-title">Notícias e Avisos</h2>
                            </div>
                            <div className="divider"></div>
                            <ul className="space-y-3">
                                <li className="p-2 hover:bg-gray-50 rounded-lg">
                                    <a className="flex items-center">
                                        <span className="badge badge-primary mr-2">Novo</span>
                                        <span>Inscrições para monitoria até 15/10</span>
                                    </a>
                                </li>
                                <li className="p-2 hover:bg-gray-50 rounded-lg">
                                    <a className="flex items-center">
                                        <span className="badge badge-secondary mr-2">Evento</span>
                                        <span>Semana de Tecnologia - 20 a 24/11</span>
                                    </a>
                                </li>
                                <li className="p-2 hover:bg-gray-50 rounded-lg">
                                    <a>Resultado das bolsas de estudo disponível</a>
                                </li>
                            </ul>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary btn-sm">Ver todas</button>
                            </div>
                        </div>
                    </div>

                    {/* Card Calendário Acadêmico */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <div className="flex items-center">
                                <FaCalendarAlt className="text-3xl text-secondary mr-3" />
                                <h2 className="card-title">Calendário Acadêmico</h2>
                            </div>
                            <div className="divider"></div>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    <tbody>
                                        <tr className="hover">
                                            <td>Provas Bimestrais</td>
                                            <td>15/10 - 20/10</td>
                                        </tr>
                                        <tr className="hover">
                                            <td>Recesso Acadêmico</td>
                                            <td>01/11 - 05/11</td>
                                        </tr>
                                        <tr className="hover">
                                            <td>Entrega de TCCs</td>
                                            <td>30/11</td>
                                        </tr>
                                        <tr className="hover">
                                            <td>Colação de Grau</td>
                                            <td>15/12</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-secondary btn-sm">Calendário Completo</button>
                            </div>
                        </div>
                    </div>

                    {/* Card Eventos */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <div className="flex items-center">
                                <FaBullhorn className="text-3xl text-accent mr-3" />
                                <h2 className="card-title">Eventos</h2>
                            </div>
                            <div className="divider"></div>
                            <div className="space-y-4">
                                <div className="p-3 bg-base-200 rounded-lg">
                                    <h3 className="font-bold">Palestra: Carreira em TI</h3>
                                    <p className="text-sm">18/10 - 19h | Auditório Central</p>
                                </div>
                                <div className="p-3 bg-base-200 rounded-lg">
                                    <h3 className="font-bold">Workshop de Pesquisa</h3>
                                    <p className="text-sm">25/10 - 14h | Laboratório 5</p>
                                </div>
                                <div className="p-3 bg-base-200 rounded-lg">
                                    <h3 className="font-bold">Feira de Estágios</h3>
                                    <p className="text-sm">05/11 - 09h às 17h | Ginásio</p>
                                </div>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-accent btn-sm">Todos os Eventos</button>
                            </div>
                        </div>
                    </div>

                    {/* Card Disciplinas */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <div className="flex items-center">
                                <FaBook className="text-3xl text-primary mr-3" />
                                <h2 className="card-title">Minhas Disciplinas</h2>
                            </div>
                            <div className="divider"></div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                                    <span>Engenharia de Software</span>
                                    <span className="badge badge-info">Nota: 8.5</span>
                                </div>
                                <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                                    <span>Banco de Dados</span>
                                    <span className="badge badge-warning">Faltas: 2</span>
                                </div>
                                <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                                    <span>Inteligência Artificial</span>
                                    <span className="badge badge-success">Aprovado</span>
                                </div>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary btn-sm">Ver Boletim</button>
                            </div>
                        </div>
                    </div>

                    {/* Card Materiais */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <div className="flex items-center">
                                <FaFileAlt className="text-3xl text-secondary mr-3" />
                                <h2 className="card-title">Materiais de Aula</h2>
                            </div>
                            <div className="divider"></div>
                            <ul className="menu bg-base-100 rounded-box">
                                <li><a>Apostila - Algoritmos (PDF)</a></li>
                                <li><a>Slides - Arquitetura de Software</a></li>
                                <li><a>Exercícios - Cálculo II</a></li>
                                <li><a>Projeto Final - Banco de Dados</a></li>
                            </ul>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-secondary btn-sm">Upload de Trabalhos</button>
                            </div>
                        </div>
                    </div>

                    {/* Card Comunidade */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <div className="flex items-center">
                                <FaUserFriends className="text-3xl text-accent mr-3" />
                                <h2 className="card-title">Comunidade</h2>
                            </div>
                            <div className="divider"></div>
                            <div className="space-y-3">
                                <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                                    <div className="avatar-group -space-x-3">
                                        <div className="avatar">
                                            <div className="w-8">A</div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">B</div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">C</div>
                                        </div>
                                    </div>
                                    <span className="ml-2">Grupo de Estudos - IA</span>
                                </div>
                                <div className="p-2 hover:bg-gray-50 rounded-lg">
                                    <a>Fórum de Dúvidas</a>
                                </div>
                                <div className="p-2 hover:bg-gray-50 rounded-lg">
                                    <a>Turmas e Colegas</a>
                                </div>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-accent btn-sm">Participar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seção de Destaques */}
                <div className="mt-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Atalhos Rápidos</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                <a className="btn btn-outline">
                                    <FaChalkboardTeacher className="mr-2" />
                                    Aulas Online
                                </a>
                                <a className="btn btn-outline">
                                    <FaFileAlt className="mr-2" />
                                    Histórico
                                </a>
                                <a className="btn btn-outline">
                                    <FaGraduationCap className="mr-2" />
                                    Matrículas
                                </a>
                                <a className="btn btn-outline">
                                    <FaBook className="mr-2" />
                                    Biblioteca
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
