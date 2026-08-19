import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { CourseCard } from '../components/CourseCard';
import { COURSES } from '../data/courses';
import { CATEGORIES } from '../data/categories';
import type { Course } from '../types';

interface CoursesPageProps {
  onSelectCourse: (course: Course) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onSelectCourse }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      if (selectedCategory !== 'all' && course.categoryId !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesDesc = course.description.toLowerCase().includes(q);
        const matchesSkills = course.skills.some(s => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesSkills) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      
      {/* Header */}
      <SectionHeader
        badge="EDUCATION"
        title="Courses & Cohorts"
        subtitle="Learn practical skills through structured courses taught by industry practitioners."
      />

      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses by keyword or skill..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchParams({});
            }}
            className={`px-3 py-1 text-xs font-medium rounded shrink-0 transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Courses ({COURSES.length})
          </button>

          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSearchParams({ category: cat.id });
              }}
              className={`px-3 py-1 text-xs font-medium rounded shrink-0 transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-slate-200 p-6 space-y-2">
          <h3 className="text-sm font-bold text-slate-800">No courses match your search</h3>
          <p className="text-xs text-slate-500">
            Try a different search query or view all available courses.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setSearchParams({});
            }}
            className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>
      )}

    </div>
  );
};
