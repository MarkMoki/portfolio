'use client';

import { useState, useMemo } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectSearchProps {
  onSearch: (query: string) => void;
  onFilter: (technologies: string[]) => void;
  availableTechnologies: string[];
}

const ProjectSearch = ({ onSearch, onFilter, availableTechnologies }: ProjectSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleTechnologyToggle = (tech: string) => {
    const newSelected = selectedTechnologies.includes(tech)
      ? selectedTechnologies.filter(t => t !== tech)
      : [...selectedTechnologies, tech];

    setSelectedTechnologies(newSelected);
    onFilter(newSelected);
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
    setSearchQuery('');
    onSearch('');
    onFilter([]);
  };

  return (
    <motion.div
      className="mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects by title, description, or features..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
            aria-label="Search projects"
          />
        </div>

        {/* Filter Button */}
        <motion.button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isFilterOpen}
          aria-controls="filter-panel"
        >
          <FaFilter />
          <span className="hidden sm:inline">Filter</span>
          {selectedTechnologies.length > 0 && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              {selectedTechnologies.length}
            </span>
          )}
        </motion.button>

        {/* Clear Filters */}
        {(searchQuery || selectedTechnologies.length > 0) && (
          <motion.button
            onClick={clearFilters}
            className="px-4 py-3 text-gray-300 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear
          </motion.button>
        )}
      </div>

      {/* Filter Panel */}
      <motion.div
        id="filter-panel"
        className="overflow-hidden"
        initial={false}
        animate={{ height: isFilterOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-4 border-t border-gray-200 dark:border-gray-600 mt-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Filter by Technology:</h4>
          <div className="flex flex-wrap gap-2">
            {availableTechnologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => handleTechnologyToggle(tech)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTechnologies.includes(tech)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-300 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectSearch;